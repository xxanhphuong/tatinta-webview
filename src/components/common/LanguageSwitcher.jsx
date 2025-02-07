import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const languages = [
        { code: 'en', name: 'English' },
        { code: 'vi', name: 'VietNam' }
    ];

    return (
        <select
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            value={i18n.language}
            className="bg-white border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                    {lang.name}
                </option>
            ))}
        </select>
    );
};

export default LanguageSwitcher;