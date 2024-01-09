import { atom } from "recoil";

export const mobileSidebarAtom = atom<boolean>({
	key: "mobileSidebarAtom",
	default: false,
});
