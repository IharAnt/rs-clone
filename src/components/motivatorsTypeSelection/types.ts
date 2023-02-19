export type props = {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>
}