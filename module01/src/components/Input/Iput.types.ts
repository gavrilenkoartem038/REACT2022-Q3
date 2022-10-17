export interface Props {
  type: string;
  name: string;
  label: string;
  validationField: string;
  valid: boolean;
  reference: React.RefObject<HTMLInputElement>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
