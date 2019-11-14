interface Props {
  label: string;
  required?: boolean;
}

export const useEmailValidator = ({
  label,
  required = false
}: Props): ((value: string) => string | null) => {
  return (value: string): string | null => {
    // eslint-disable-next-line no-useless-escape
    const emailRegex: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (value || required) {
      if (required && (!value || (value && !value.trim()))) {
        return `${label} is required`;
      }

      if (!emailRegex.test(value)) {
        return `${label} must be valid email address`;
      }
    }

    return null;
  };
};
