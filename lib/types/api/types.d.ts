export declare type NetworkType = 'MAIN' | 'TEST' | 'PRIVATE';
export declare type Asset = 'TST' | 'TSG' | string;
export declare enum TransactionType {
    BookKeeper = 2,
    Claim = 3,
    Deploy = 208,
    Invoke = 209,
    Enrollment = 4,
    Vote = 5
}
export declare enum VmType {
    NEOVM_TYPE = 1,
    WASMVM_TYPE = 3
}
export declare type EventListener = (data: any) => void;
export declare type ParameterType = 'Boolean' | 'Integer' | 'ByteArray' | 'Struct' | 'Map' | 'String' | 'Array' | 'Address';
export interface Parameter {
    type: ParameterType;
    value: any;
}
export interface BlockHeader {
    Version: number;
    PrevBlockHash: string;
    TransactionsRoot: string;
    BlockRoot: string;
    Timestamp: number;
    Height: number;
    ConsensusData: number;
    ConsensusPayload: string;
    NextBookkeeper: string;
    Bookkeepers: string[];
    SigData: string[];
    Hash: string;
}
export interface Block {
    Hash: string;
    Size: number;
    Header: BlockHeader;
    Transactions: Transaction[];
}
export interface TxSignature {
    PubKeys: string[];
    M: number;
    SigData: string[];
}
export interface Transaction {
    Version: number;
    Nonce: number;
    GasPrice: number;
    GasLimit: number;
    Payer: string;
    TxType: TransactionType;
    Payload: any;
    Attributes: any[];
    Sigs: TxSignature[];
    Hash: string;
    Height: number;
}
export interface MerkleProof {
    Type: string;
    TransactionsRoot: string;
    BlockHeight: number;
    CurBlockRoot: string;
    CurBlockHeight: number;
    TargetHashes: string[];
}
export interface Balance {
    TST: string;
    TSG: string;
    [key: string]: string;
}
export interface TstIdAttribute {
    key: string;
    type: string;
    value: string;
}
export interface TstIdDDO {
    attributes: TstIdAttribute[];
}
export interface Provider {
    name: string;
    version: string;
    compatibility: string[];
}
export interface Network {
    type: NetworkType;
    address: string;
}
export declare type Result = string[];
export interface Response {
    transaction: string;
    results: Result[];
}
export interface Signature {
    publicKey: string;
    data: string;
}
export interface Contract {
    Code: string;
    NeedStorage: boolean;
    Name: string;
    CodeVersion: string;
    Author: string;
    Email: string;
    Description: string;
}
export interface BlockWithTxList {
    Hash: string;
    Height: number;
    Transactions: string[];
}
export interface GasPrice {
    gasPrice: number;
    height: number;
}
