type Digit = "1" | "2" | "3" | "4" | "5" | "6";
type Byte = "0" | Digit | "7" | "8" | "9" | "a" | "b" | "c" | "d" | "e" | "f";

export type NetworkState = `0x${"" | Digit}${Byte}`;

export type Snapshot = {
    initial: NetworkState;
};

export type MineOptions = {
    increaseTime?: number;
    nextBlockTimestamp?: number;
};
