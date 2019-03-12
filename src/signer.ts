import { RpcInterfaces, ApiInterfaces } from 'eosjs';

export default class signer implements ApiInterfaces.SignatureProvider {
	getAvailableKeys(): Promise<string[]> {
		return Promise.resolve([ 'EOS5TYtUXsbRJrz61gsQWQho6AYyCcRFgbFm4TPfrEbzb43x8Ewfq' ]);
	}

	sign({
		chainId,
		requiredKeys,
		serializedTransaction
	}: ApiInterfaces.SignatureProviderArgs): Promise<{ signatures: any[]; serializedTransaction: Uint8Array }> {
		var respone: RpcInterfaces.PushTransactionArgs = {
			signatures: [
				'SIG_K1_KBorAvQPQx3y595gBZjAmCSFGbNwr9H4fwaWf8jdtEUkmVAWtvugZSrGDB1VoyaK9Vv1tqYeb7b3mCTgxmjwyQGcAM5Bq9'
			],
			serializedTransaction: serializedTransaction
		};

		return Promise.resolve(respone);
	}
}
