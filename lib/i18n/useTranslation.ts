'use client'

import { useParams } from 'next/navigation'
import ru from './ru.json'
import en from './en.json'

type Translations = typeof ru

export function useTranslation() {
  const params = useParams()
  const lang = params?.lang === 'en' ? 'en' : 'ru'
  const t: Translations = lang === 'en' ? en : ru
  return { t, lang }
}
