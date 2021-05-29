/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TokenTimelock } from "../TokenTimelock";

export class TokenTimelock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    token_: string,
    beneficiary_: string,
    releaseTime_: BigNumberish,
    overrides?: Overrides
  ): Promise<TokenTimelock> {
    return super.deploy(
      token_,
      beneficiary_,
      releaseTime_,
      overrides || {}
    ) as Promise<TokenTimelock>;
  }
  getDeployTransaction(
    token_: string,
    beneficiary_: string,
    releaseTime_: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      token_,
      beneficiary_,
      releaseTime_,
      overrides || {}
    );
  }
  attach(address: string): TokenTimelock {
    return super.attach(address) as TokenTimelock;
  }
  connect(signer: Signer): TokenTimelock__factory {
    return super.connect(signer) as TokenTimelock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenTimelock {
    return new Contract(address, _abi, signerOrProvider) as TokenTimelock;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token_",
        type: "address",
      },
      {
        internalType: "address",
        name: "beneficiary_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "releaseTime_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "beneficiary",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "releaseTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60e06040523480156200001157600080fd5b5060405162000e5138038062000e51833981810160405281019062000037919062000140565b4281116200007c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200007390620001bd565b60405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250508173ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b815250508060c08181525050505050620002df565b6000815190506200010c8162000291565b92915050565b6000815190506200012381620002ab565b92915050565b6000815190506200013a81620002c5565b92915050565b6000806000606084860312156200015657600080fd5b6000620001668682870162000112565b93505060206200017986828701620000fb565b92505060406200018c8682870162000129565b9150509250925092565b6000620001a5603283620001df565b9150620001b28262000242565b604082019050919050565b60006020820190508181036000830152620001d88162000196565b9050919050565b600082825260208201905092915050565b6000620001fd8262000218565b9050919050565b60006200021182620001f0565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f546f6b656e54696d656c6f636b3a2072656c656173652074696d65206973206260008201527f65666f72652063757272656e742074696d650000000000000000000000000000602082015250565b6200029c81620001f0565b8114620002a857600080fd5b50565b620002b68162000204565b8114620002c257600080fd5b50565b620002d08162000238565b8114620002dc57600080fd5b50565b60805160601c60a05160601c60c051610b3d62000314600039600061023e0152600060b9015260006102660152610b3d6000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806338af3eed1461005157806386d1a69f1461006f578063b91d400114610079578063fc0c546a14610097575b600080fd5b6100596100b5565b6040516100669190610756565b60405180910390f35b6100776100dd565b005b61008161023a565b60405161008e9190610877565b60405180910390f35b61009f610262565b6040516100ac919061079a565b60405180910390f35b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b6100e561023a565b421015610127576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161011e906107d7565b60405180910390fd5b6000610131610262565b73ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016101699190610756565b60206040518083038186803b15801561018157600080fd5b505afa158015610195573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101b991906105d0565b9050600081116101fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101f590610857565b60405180910390fd5b6102376102096100b5565b82610212610262565b73ffffffffffffffffffffffffffffffffffffffff1661028a9092919063ffffffff16565b50565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b61030b8363a9059cbb60e01b84846040516024016102a9929190610771565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610310565b505050565b6000610372826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166103d79092919063ffffffff16565b90506000815111156103d2578080602001905181019061039291906105a7565b6103d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103c890610837565b60405180910390fd5b5b505050565b60606103e684846000856103ef565b90509392505050565b606082471015610434576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161042b906107f7565b60405180910390fd5b61043d85610503565b61047c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047390610817565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516104a5919061073f565b60006040518083038185875af1925050503d80600081146104e2576040519150601f19603f3d011682016040523d82523d6000602084013e6104e7565b606091505b50915091506104f7828286610516565b92505050949350505050565b600080823b905060008111915050919050565b6060831561052657829050610576565b6000835111156105395782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056d91906107b5565b60405180910390fd5b9392505050565b60008151905061058c81610ad9565b92915050565b6000815190506105a181610af0565b92915050565b6000602082840312156105b957600080fd5b60006105c78482850161057d565b91505092915050565b6000602082840312156105e257600080fd5b60006105f084828501610592565b91505092915050565b610602816108c4565b82525050565b600061061382610892565b61061d81856108a8565b935061062d818560208601610930565b80840191505092915050565b6106428161090c565b82525050565b60006106538261089d565b61065d81856108b3565b935061066d818560208601610930565b61067681610963565b840191505092915050565b600061068e6032836108b3565b915061069982610974565b604082019050919050565b60006106b16026836108b3565b91506106bc826109c3565b604082019050919050565b60006106d4601d836108b3565b91506106df82610a12565b602082019050919050565b60006106f7602a836108b3565b915061070282610a3b565b604082019050919050565b600061071a6023836108b3565b915061072582610a8a565b604082019050919050565b61073981610902565b82525050565b600061074b8284610608565b915081905092915050565b600060208201905061076b60008301846105f9565b92915050565b600060408201905061078660008301856105f9565b6107936020830184610730565b9392505050565b60006020820190506107af6000830184610639565b92915050565b600060208201905081810360008301526107cf8184610648565b905092915050565b600060208201905081810360008301526107f081610681565b9050919050565b60006020820190508181036000830152610810816106a4565b9050919050565b60006020820190508181036000830152610830816106c7565b9050919050565b60006020820190508181036000830152610850816106ea565b9050919050565b600060208201905081810360008301526108708161070d565b9050919050565b600060208201905061088c6000830184610730565b92915050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b60006108cf826108e2565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006109178261091e565b9050919050565b6000610929826108e2565b9050919050565b60005b8381101561094e578082015181840152602081019050610933565b8381111561095d576000848401525b50505050565b6000601f19601f8301169050919050565b7f546f6b656e54696d656c6f636b3a2063757272656e742074696d65206973206260008201527f65666f72652072656c656173652074696d650000000000000000000000000000602082015250565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b7f546f6b656e54696d656c6f636b3a206e6f20746f6b656e7320746f2072656c6560008201527f6173650000000000000000000000000000000000000000000000000000000000602082015250565b610ae2816108d6565b8114610aed57600080fd5b50565b610af981610902565b8114610b0457600080fd5b5056fea2646970667358221220839bcd6b0e01736199b959a16ea12f757028e8a556bb066536dcd184b0c960d164736f6c63430008040033";
