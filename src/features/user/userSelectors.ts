import type { RootState } from "@/store";

export const userName = ({ userState }: RootState): string => userState.name;
