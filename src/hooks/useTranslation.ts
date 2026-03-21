import { translations, type Lang } from "@/lib/translations";
import { useLang } from "@/hooks/useLang";

export const useTranslation = () => {
  const { lang } = useLang();
  const t = (key: string): string => translations[key]?.[lang] || key;
  return { t, lang };
};
