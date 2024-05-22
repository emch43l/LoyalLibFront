import type { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  Profile: { id: number };
  Books: undefined;
  BookDetails: BookDetails;
  Login: undefined,
  Register: undefined,
  Home: undefined
};

export type BookDetails = {
  id: number
}

export type BookDetailsScreenProps<T extends keyof RootStackParamList> = StackScreenProps<RootStackParamList,T>

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
