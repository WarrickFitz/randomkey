import React, { Component } from 'react';
import './App.css';
import { Api, JsonRpc } from 'eosjs';
import signer from './signer';
//const { JsSignatureProvider } = require('eosjs/dist/eosjs-jssig');
// const { JsSignatureProvider } from

class App extends Component {
	constructor() {
		super();
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		console.log('test');
		const defaultPrivateKey = 'A value that will never be used becasue out signer has the response hard coded';
		const signatureProvider = new signer([ defaultPrivateKey ]);
		const rpc = new JsonRpc('http://api.pennstation.eosnewyork.io:7001', { fetch });
		const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });

		(async () => {
			const result = await api
				.transact(
					{
						actions: [
							{
								account: 'eosio',
								name: 'voteproducer',
								authorization: [
									{
										actor: 'ledgerledg2r',
										permission: 'owner'
									}
								],
								data: {
									voter: 'ledgerledg2r',
									proxy: '',
									producers: [
										'bpa1',
										'bpa2',
										'bpa3',
										'bpa4',
										'bpa5',
										'bpb1',
										'bpb2',
										'bpb3',
										'bpb4',
										'bpb5',
										'bpc1',
										'bpc2',
										'bpc3'
									]
								}
							}
						]
					},
					{
						broadcast: true,
						blocksBehind: 3,
						expireSeconds: 60
					}
				)
				.then((result) => {
					console.log('[txn][success]', result);
					return result;
				})
				.catch((error) => {
					console.error('[txn][error]', error);
					throw error;
				});
			console.dir(result);
		})();
	}

	render() {
		return (
			<div className="App">
				<button onClick={this.handleClick}>Test</button>
			</div>
		);
	}
}

export default App;
