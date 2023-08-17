const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
      // agent seria como nuestro axios,quien se encargaria de hacer la peticion asincrionica
    });
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const response = (await agent.get("/rickandmorty/character/1")).body;
      expect(response).toHaveProperty(
        "id",
        "name",
        "species",
        "gender",
        "status",
        "origin",
        "image"
      );
    });
    it("Si hay un error responde con status: 500", async () => {
      await agent.get("/rickandmorty/character/1343").expect(500);
    });
  });
  describe("GET /rickandmorty/login", () => {
    it("Login correcto", async () => {
      const response = (
        await agent.get(
          "/rickandmorty/login?email=sattog@gmail.com&password=123456"
        )
      ).body;
      expect(response.access).toEqual(true);
    });
    it("Login incorrecto", async () => {
      const response = (
        await agent.get(
          "/rickandmorty/login?email=santi@gmail.com&password=123456sac"
        )
      ).body;
      expect(response.access).toEqual(false);
    });
  });
  describe("POST /rickandmorty/fav", () => {
    const character1 = { id: "1", name: "so" };
    const character2 = { id: "2", name: "soto" };
    it("Devuelve el elemento enviado por body", async () => {
      const response = (await agent.post("/rickandmorty/fav").send(character1))
        .body;
      expect(response).toContainEqual(character1);
    });
    it("Devuelve el elemento previo y actual enviado por body", async () => {
      const response = (await agent.post("/rickandmorty/fav").send(character2))
        .body;
      expect(response).toContainEqual(character1);
      expect(response).toContainEqual(character2);
    });
  });
  describe("DELETE /rickandmorty/fav/:id", () => {
    const character1 = { id: "1", name: "so" };
    const character2 = { id: "2", name: "soto" };
    it("Devuelve el arreglo correspondiente si no se le agrega ningun personaje", async () => {
      const response = (await agent.delete("/rickandmorty/fav/2390")).body;
      console.log(response);
      expect(response).toContainEqual(character1);
      expect(response).toContainEqual(character2);
    });
    it("Elimina correctamente al personaje que se indica por ID ", async () => {
      const response = (await agent.delete("/rickandmorty/fav/1")).body;
      expect(response).not.toContainEqual(character1);
    });
  });
});
