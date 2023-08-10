// import StellarSdk from "stellar-sdk";
// console.log(StellarSdk);
import albedo, { PublicKeyIntentResult } from "@albedo-link/intent";
import {
  Server,
  Operation,
  TransactionBuilder,
  Networks,
  Asset,
  StrKey,
  Transaction,
  Horizon,
  Keypair,
  AccountResponse,
} from "stellar-sdk";
const server = new Server("https://horizon-testnet.stellar.org");
// const operation = new Operation({});
console.log(server);
const keypair = Keypair.fromPublicKey(
  "GDR66SF5HGPHC4MTW5PDVJPW2EPZ7RDESM5K6N3ZZTFZ5FLCB2X6AGT2"
);
console.log(
  StrKey.isValidEd25519PublicKey(
    "GDR66SF5HGPHC4MTW5PDVJPW2EPZ7RDESM5K6N3ZZTFZ5FLCB2X6AGT2"
  ),
  keypair.publicKey,
  "key"
);

// (window as any).global = window;
export const isRabetAvailable = (): boolean => {
  const rabet = (window as any).rabet;
  return !!rabet && !!rabet.connect;
};
type RabetResponse = {
  isError: string;
  keypair?: string;
  error?: string;
};
export const connectRabet = async (publickey: string) => {
  if (!isRabetAvailable()) {
    throw new Error("Rabet not available");
  }
  const rabet = (window as any).rabet;
  let keypair;
  const result: RabetResponse = await rabet
    .connect()
    .then((response: { publicKey: string }) => {
      return { isError: false, keypair: response.publicKey };
    })
    .catch((err: { error: string }) => {
      return { isError: true, error: err };
    });
  if (!result.isError) {
    if (result.keypair !== publickey) {
      return {
        success: false,
        message: "Incorrect Public Key",
        data: "",
      };
    } else {
      if (await checkIfTrusted(result.keypair)) {
        return {
          success: true,
          message: "Already signed",
          data: "",
        };
      } else {
        const random = await createTransaction(result.keypair);
        type signedxdrtype = {
          success: boolean;
          xdr: string;
          error?: string;
        };
        const signedxdr: signedxdrtype = await rabet
          .sign(random, Networks.TESTNET)
          .then((result: { xdr: string }) => {
            return { success: true, xdr: result.xdr };
          })
          .catch((error: { error: string }) => {
            return { success: false, error: error.error, xdr: "" };
          });
        if (signedxdr.success) {
          console.log("ENTEREDF");
          const submittedResponse = await server
            .submitTransaction(new Transaction(signedxdr.xdr, Networks.TESTNET))
            .then((response) => {
              console.log(response);
              return {
                success: true,
                message: "Succesfully signed and submitted",
                data: response,
              };
            })
            .catch(() => {
              return {
                success: true,
                message: "Error in Submitting",
                data: "",
              };
            });
          return submittedResponse;
        } else {
          return {
            success: false,
            message: "Error in Signing",
            data: "",
          };
        }
      }
    }
  } else {
    return {
      success: false,
      message: "Error in connecting with Rabet",
      data: "",
    };
  }
};
const checkIfTrusted = async (keypair: string) => {
  const response = await server
    .accounts()
    .accountId(keypair)
    .call()
    .then(({ balances }) => {
      const response = balances.find((item) => {
        //@ts-ignore
        return item.asset_code === "HLT";
      });
      return response;
    });
  if (response === undefined) {
    return false;
  } else {
    return true;
  }
};
const createTransaction = async (keypair: string): Promise<string> => {
  const account = await server.loadAccount(keypair).then((response) => {
    return response;
  });
  const transaction = new TransactionBuilder(account, {
    fee: "500",
    networkPassphrase: Networks.TESTNET,
  })
    .addOperation(
      Operation.changeTrust({
        asset: new Asset(
          "HLT",
          "GDHHQ2WAAIJVDWRFQVQBITUFXJ426HL3JP3YMTOXQGA5RPVZPMEVZVWF"
        ),
      })
    )
    .setTimeout(30)
    .build();
  const xdrString = transaction.toXDR();
  return xdrString;
};
// GDR66SF5HGPHC4MTW5PDVJPW2EPZ7RDESM5K6N3ZZTFZ5FLCB2X6AGT2

// Testnet
// GDHHQ2WAAIJVDWRFQVQBITUFXJ426HL3JP3YMTOXQGA5RPVZPMEVZVWF
// SACVEDFTTWRHRW2F6MMOXZPEII2FYFBTLPJORZBREJCWG34KECRSIBVA
type AlbedoResponse = {
  pubkey: string;
  signed_message: string;
  signature: string;
};
export const connectAlbedo = async (publickey: string) => {
  const response: AlbedoResponse = await albedo
    .publicKey({})
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return { pubkey: "", signed_message: "", signature: "" };
    });
  if (response.pubkey.length > 0) {
    if (response.pubkey !== publickey) {
      console.log("Incorrect");
    } else {
      console.log("correct");
    }
  } else {
    console.log("error");
  }
};
