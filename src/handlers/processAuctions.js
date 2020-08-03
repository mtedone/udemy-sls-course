import createError from 'http-errors';
import { getEndedAuctions } from '../lib/getEndedAuctions';
import { closeAuction } from '../lib/closeAuction';

async function processAuctions(event, context) {
  try {
    const auctionsToClose = await getEndedAuctions();
    console.log('Auctions to close', auctionsToClose);
    const closedPromises = auctionsToClose.map((auction) =>
      closeAuction(auction)
    );
    await Promise.all(closedPromises);
    return { closed: closedPromises.length };
  } catch (e) {
    console.error(e);
    throw new createError.InternalServerError(e);
  }
}

export const handler = processAuctions;
