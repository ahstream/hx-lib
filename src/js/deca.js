import { fetchHelper } from './fetch.js';

const KNOWN_BLOCKCHAINS = ['ethereum', 'tezos'];

// Exports -------------------------------------------------------

export class DecaUser {
  profile = null;
  wallets = [];
  walletsEth = [];
  walletsTez = [];
  walletsOther = [];

  constructor() {}

  async getProfile(usernameOrWallet) {
    const profile = await getUserProfile(usernameOrWallet);
    if (!profile) {
      return;
    }
    //this.profile = profile;
    this.id = profile.id;
    this.username = profile.username;
    this.createdAt = profile.createdAt;
    this.wallets = profile.wallets;
    this.walletsEth = profile.wallets.filter((x) => x.blockchain === 'ethereum').map((x) => x.address);
    this.walletsTez = profile.wallets.filter((x) => x.blockchain === 'tezos').map((x) => x.address);
    this.walletsOther = profile.wallets.filter((x) => !KNOWN_BLOCKCHAINS.includes(x.blockchain)).map((x) => x.address);
  }
}

export async function getUser(usernameOrWallet) {
  const user = new DecaUser();
  await user.getProfile(usernameOrWallet);
  return user;
}

// Helpers -------------------------------------------------------

async function getUserProfile(usernameOrWallet) {
  const url = `https://deca.art/api/trpc/user.profile?batch=1&input=%7B%220%22%3A%7B%22json%22%3A%7B%22usernameOrAddress%22%3A%22${usernameOrWallet}%22%7D%7D%7D`;

  const result = await fetchHelper(url);
  if (!result?.data?.length) {
    return null;
  }
  return result.data[0].result?.data?.json;
}
