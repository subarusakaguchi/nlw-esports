import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function Execute() {
  const datas = [
    {
      name: "Minecraft",
      image_url:
        "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    },
    {
      name: "Fortnite",
      image_url: "https://static-cdn.jtvnw.net/ttv-boxart/33214-188x250.jpg",
    },
    {
      name: "Fall Guys",
      image_url: "https://static-cdn.jtvnw.net/ttv-boxart/512980-188x250.jpg",
    },
    {
      name: "Apex Legends",
      image_url: "https://static-cdn.jtvnw.net/ttv-boxart/511224-188x250.jpg",
    },
    {
      name: "Valorant",
      image_url: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    },
    {
      name: "GTA V",
      image_url:
        "https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-188x250.jpg",
    },
  ];

  await Promise.all(
    datas.map(async (data) => {
      await prisma.game.create({ data });
    })
  );

  await prisma.$disconnect();
}

Execute();
