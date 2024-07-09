import { FormControl, MenuItem, Select } from "@mui/material";
import * as S from "@/components/LanguageSelect/styles";
import { useLanguage } from "@/hooks/useLanguages";

export function LanguageSelect() {
  const { language, setLanguageToEnglish, setLanguageToPortuguese } =
    useLanguage();

  const handleChange = (event: any) => {
    if (event.target.value === "en") {
      setLanguageToEnglish();
      window.location.reload();
    } else {
      setLanguageToPortuguese();
      window.location.reload();
    }
  };

  return (
    <S.Container>
      <S.CustomFormControl>
        <Select
          labelId="language-select-label"
          value={language}
          onChange={handleChange}
        >
          <MenuItem value="pt">PT</MenuItem>
          <MenuItem value="en">EN</MenuItem>
        </Select>
      </S.CustomFormControl>
    </S.Container>
  );
}
