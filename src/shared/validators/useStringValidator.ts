interface Props {
  label: string;
  min?: number;
  max?: number;
  regex?: RegExp;
  required?: boolean;
}

export const useStringValidator = ({
  label,
  min,
  max,
  regex,
  required
}: Props): ((value: string) => string | null) => {
  return (value: string): string | null => {
    if (value || required) {
      const testValue = value ? value.trim() : '';

      if (!testValue) {
        return `${label} is required`;
      }

      if (min && testValue.length < min) {
        return `${label} must be at least ${min} characters long`;
      }

      if (max && testValue.length > max) {
        return `${label} must be shorter than ${max} characters`;
      }

      if (regex && !regex.test(testValue)) {
        return `${label} is not in valid format`;
      }
    }

    return null;
  };
};
