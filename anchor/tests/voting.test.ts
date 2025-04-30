import * as anchor from '@coral-xyz/anchor';
import { Program } from '@coral-xyz/anchor';
import { Voting  } from 'anchor/target/types/voting';
import {startAnchor} from 'anchor-bankrun';
import {BankrunProvider} from 'anchor-bankrun';
import { PublicKey } from '@solana/web3.js';

const IDL = require('../target/idl/voting.json');

const votingAddress = new PublicKey('JAVuBXeBZqXNtS73azhBDAoYaaAFfo4gWXoZe2e7Jf8H')

describe('voting', () => {
  it('Initialize Poll', async () => {
      const context = await startAnchor('', [{name: "voting", programId: votingAddress}], []);
      const provider = new BankrunProvider(context);

      const votingProgram = new Program<Voting>(
        IDL,
        provider
      );

      await votingProgram.methods.initializePoll(
        new anchor.BN(1),
        "Megadeth vs. Metallica?",
        new anchor.BN(1746043691),
        new anchor.BN(1946043691),
      ).rpc();


  })
})
