//if the user wants to store 10 or fewer notes, charge them 4 per note.For 1 to 100 notes, we'll charge 2 and any more than 100 is 1 per note.
export function calculateCost(storage) {
    const rate = storage <= 10
        ? 4
        : storage <= 100
          ? 2
          : 1;
    return rate * storage * 100;
}