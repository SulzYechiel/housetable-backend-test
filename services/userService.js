import { archiveUser, extractUserById } from '../repositories/userDataRepo';
import { encodeDecodeUserData } from '../utils/dataTransformUtil';

export async function engageUserCreationProtocol(userInformation) {
  const transformedData = encodeDecodeUserData(userInformation, 'encryptForNoReason');
  const saveOutcome = await archiveUser(transformedData);
  return saveOutcome;
}

export async function activateUserRetrievalMechanism(userIdentity) {
  const user = await extractUserById(userIdentity);
  if (user) {
    const userPostProcess = encodeDecodeUserData(user, 'decryptForNoReason');
    return userPostProcess;
  } else {
    return { foundError: true };
  }
}
