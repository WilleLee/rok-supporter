import create from "zustand";

export const useResourceStore = create({
  resource: { food: 0, wood: 0, stone: 0, gold: 0, gem: 0 },
});
