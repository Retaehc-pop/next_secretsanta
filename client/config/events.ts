const EVENTS = {
  connection: "connection",
  CLIENT: {
    CREATE_LOBBY: "CREATE_LOBBY",
    JOIN_LOBBY: "JOIN_LOBBY",
    START_GAME: "START_GAME",
  },
  SERVER: {
    LOBBYS: "LOBBYS",
    JOINED_LOBBY: "JOINED_LOBBY",
    ROOM_PLAYER: "ROOM_PLAYER",
    LOBBY_NOT_FOUND: 'LOBBY_NOT_FOUND',
  }
};

export default EVENTS;