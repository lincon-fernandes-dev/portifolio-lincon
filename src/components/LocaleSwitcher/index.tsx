'use client';
import styles from "./SelectLanguage.module.css";
import { usePathname, useRouter } from '../../../i18n/navigation';
import { useLocale } from 'next-intl';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
      router.refresh();
    }
  };

  return (
    <div className={styles.selectWrapper}>

    <select
      className={styles.select}
      value={locale}
      onChange={e => switchLocale(e.target.value)}>
      <option label="portuguese" value="pt">PT</option>
      <option label="english" value="en">EN</option>
      <option label="polish" value="pl">PL</option>
    </select>
        </div>
  );
}