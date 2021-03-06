export class unspentTxOut {
    public txOutId: string //14250b0a74ddc2e1d94b3cea94c5507791cba5887b9d5e5d5e982d2c9637640a
    public txOutIndex: number //0-->???TxOut으로 만든거라고?
    public account: string //e7916d4d449f22bc65eec91ec01e8f98391f6a31
    public amount: number //50

    constructor(_txOutId: string, _txOutIndex: number, _account: string, _amount: number) {
        this.txOutId = _txOutId
        this.txOutIndex = _txOutIndex
        this.account = _account
        this.amount = _amount
    }

    static getMyUnspentTxOuts(_account: string, unspentTxOuts: unspentTxOut[]): unspentTxOut[] {
        //전체 UTXO, account
        return unspentTxOuts.filter((utxo: unspentTxOut) => utxo.account === _account)
    }
}

// unspentTxOut {
//     txOutId: '012d7d3b61ad4cefe57c388112bef80eddb9040ef621ac183879dc5f18778c45',
//     txOutIndex: 0,
//     account: '062739667c018b24604c86f54e2b63edbabe10ea',
//     amount: 50
//   },

//이건아님
// Transaction {
//     txIns: [ TxIn { txOutId: '', txOutIndex: 0, signature: undefined } ],
//     txOuts: [
//       TxOut {
//         account: 'e7916d4d449f22bc65eec91ec01e8f98391f6a31',
//         amount: 50
//       }
//     ],
//     hash: '14250b0a74ddc2e1d94b3cea94c5507791cba5887b9d5e5d5e982d2c9637640a'
//   }

//1개의 transaction마다  utxo를 만들어줘야되는데
//보통다  txout내용은 2개이상이니 배열로 만들어줘야된다
