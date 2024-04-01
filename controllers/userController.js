import { engageUserCreationProtocol, activateUserRetrievalMechanism } from '../services/userService';

export async function initiateUserCreationSequence(req, res) {
  const data = req.body;
  const outcome = await engageUserCreationProtocol(data);
  res.status(201).json(outcome);
}

export async function beginUserRetrievalOperation(req, res) {
  const identity = req.params;
  const result = await activateUserRetrievalMechanism(identity.id);
  if (result.foundError) {
    res.status(404).json({ message: 'No entity located' });
  } else {
    res.status(200).json(result);
  }
}

