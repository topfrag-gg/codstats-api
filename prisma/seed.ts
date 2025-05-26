import console from 'node:console';
import { exit } from 'node:process';
import { PrismaClient } from '@prisma/client';

type PlayerRole = 'ENTRY_SMG' | 'ROAMING_SMG' | 'MAIN_AR' | 'FLEX';

const prisma = new PrismaClient();

const main = async () => {
	console.log('🌱 Seeding database...');

	// Game Modes
	const [hardpoint, snd, control] = await Promise.all([
		prisma.gameMode.upsert({
			where: { name: 'Hardpoint' },
			update: {},
			create: { name: 'Hardpoint' },
		}),
		prisma.gameMode.upsert({
			where: { name: 'Search and Destroy' },
			update: {},
			create: { name: 'Search and Destroy' },
		}),
		prisma.gameMode.upsert({
			where: { name: 'Control' },
			update: {},
			create: { name: 'Control' },
		}),
	]);

	// Maps
	const maps = await prisma.map.createMany({
		data: [
			{ name: 'Skyline', gameModeId: hardpoint.id },
			{ name: 'Rewind', gameModeId: snd.id },
			{ name: 'Vault', gameModeId: control.id },
		],
		skipDuplicates: true,
	});

	console.log(`${maps.count} maps created`);

	const allMaps = await prisma.map.findMany();

	// Teams
	const [teamAlpha, teamBravo] = await Promise.all([
		prisma.team.create({
			data: {
				name: 'Team Alpha',
				logo: 'https://via.placeholder.com/150?text=Alpha',
			},
		}),
		prisma.team.create({
			data: {
				name: 'Team Bravo',
				logo: 'https://via.placeholder.com/150?text=Bravo',
			},
		}),
	]);

	// Players
	const roles: PlayerRole[] = ['ENTRY_SMG', 'ROAMING_SMG', 'MAIN_AR', 'FLEX'];
	const alphaPlayers = await Promise.all(
		roles.map((role, i) =>
			prisma.player.create({
				data: {
					firstName: `Alpha${i + 1}`,
					lastName: `Player`,
					gamertag: `Alpha${i + 1}`,
					role,
					teamId: teamAlpha.id,
				},
			}),
		),
	);

	const bravoPlayers = await Promise.all(
		roles.map((role, i) =>
			prisma.player.create({
				data: {
					firstName: `Bravo${i + 1}`,
					lastName: `Player`,
					gamertag: `Bravo${i + 1}`,
					role,
					teamId: teamBravo.id,
				},
			}),
		),
	);

	// Event
	const event = await prisma.event.create({
		data: {
			name: 'Major I',
			startDate: new Date('2025-03-01'),
			endDate: new Date('2025-03-03'),
		},
	});

	// Match
	const match = await prisma.match.create({
		data: {
			eventId: event.id,
			teamAId: teamAlpha.id,
			teamBId: teamBravo.id,
			date: new Date(),
			winnerId: teamAlpha.id,
		},
	});

	// MatchMaps
	const matchMaps = await Promise.all([
		prisma.matchMap.create({
			data: {
				matchId: match.id,
				mapId: allMaps.find((m: { name: string }) => m.name === 'Skyline')!.id,
				gameModeId: hardpoint.id,
				mapNumber: 1,
				winnerId: teamAlpha.id,
			},
		}),
		prisma.matchMap.create({
			data: {
				matchId: match.id,
				mapId: allMaps.find((m: { name: string }) => m.name === 'Rewind')!.id,
				gameModeId: snd.id,
				mapNumber: 2,
				winnerId: teamBravo.id,
			},
		}),
		prisma.matchMap.create({
			data: {
				matchId: match.id,
				mapId: allMaps.find((m: { name: string }) => m.name === 'Vault')!.id,
				gameModeId: control.id,
				mapNumber: 3,
				winnerId: teamAlpha.id,
			},
		}),
	]);

	// Player Stats (same dummy stats for each player/map for now)
	for (const matchMap of matchMaps) {
		const allPlayers = [...alphaPlayers, ...bravoPlayers];
		for (const player of allPlayers) {
			await prisma.matchMapPlayerStat.create({
				data: {
					matchMapId: matchMap.id,
					playerId: player.id,
					teamId: player.teamId!,
					kills: Math.floor(Math.random() * 30),
					deaths: Math.floor(Math.random() * 30),
					assists: Math.floor(Math.random() * 10),
					damage: Math.floor(Math.random() * 5000),
					objective: Math.floor(Math.random() * 10),
					score: Math.floor(Math.random() * 5000),
				},
			});
		}
	}

	console.log('✅ Seed complete.');
};

try {
	await main();
} catch (e) {
	console.error('❌ Seed error:', e);
	exit(1);
} finally {
	await prisma.$disconnect();
}
