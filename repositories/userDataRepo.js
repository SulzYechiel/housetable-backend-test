let dbSimulationForUsers = {};

export async function archiveUser(userInfo) {
  const uniqueId = `user_${new Date().getTime()}_${Object.keys(dbSimulationForUsers).length}`;
  dbSimulationForUsers[uniqueId] = userInfo;
  return { id: uniqueId, ...userInfo };
}

export async function extractUserById(userId) {
  return dbSimulationForUsers[userId] || null;
}
