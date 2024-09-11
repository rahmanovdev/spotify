import { create } from "zustand";

interface IPlayerStore {
  accessToken: string;
  trackUris: string[];
  trackIndex: number | null;
  activeUri: string | null;
  openClose: boolean;

  setAccessToken: (value: string) => void;
  setTrackUris: (value: string[]) => void;
  setTrackIndex: (value: number) => void;
  setActiveUri: (value: string) => void;
  setOpenClose: (value: boolean) => void;
}
export const usePlayerStore = create<IPlayerStore>((set) => ({
  accessToken: "",
  trackUris: [],
  trackIndex: null,
  activeUri: null,
  openClose: false,
  setAccessToken: (value) => set({ accessToken: value }),
  setTrackUris: (value) => set({ trackUris: value }),
  setTrackIndex: (value) => set({ trackIndex: value }),
  setActiveUri: (value) => set({ activeUri: value }),
  setOpenClose: (value) => set({ openClose: value }),
}));
