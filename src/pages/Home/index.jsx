import React from "react";
import { Search, Map, Ticket, Utensils, Bus, UserPlus, FileText } from 'lucide-react';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavItem = ({ icon, label, color, textColor }) => (
    <div className="flex flex-col items-center space-y-2">
        <div className={`p-3 rounded-xl ${color}`}>
            <div className={`w-6 h-6 ${textColor}`}>{icon}</div>
        </div>
        <span className="text-xs text-center">{label}</span>
    </div>
);

const Section = ({ title, children }) => (
    <div className="p-4">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">{title}</h2>
            <button className="text-red-500 text-sm">Xem thêm</button>
        </div>
        {children}
    </div>
);

const TourCard = ({ image, title }) => (
    <div className="flex-shrink-0 w-64">
        <div className="relative h-32 rounded-lg overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <h3 className="mt-2 text-sm font-medium">{title}</h3>
    </div>
);

const VisaItem = ({ country, type }) => (
    <div className="flex justify-between items-center py-2">
        <div>
            <h3 className="font-medium">{country}</h3>
            <p className="text-sm text-gray-500">{type}</p>
        </div>
        <button className="text-red-500">{">"}</button>
    </div>
);

const DestinationCard = ({ image, title }) => (
    <div className="relative rounded-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/50">
            <h3 className="text-white font-medium">{title}</h3>
        </div>
    </div>
);


const HomePage = () => {
    const { t } = useTranslation();
    return <div className="max-w-md mx-auto">
        <title>Home page</title>
        <meta name="author" content="Josh" />
        <link rel="author" href="https://twitter.com/joshcstory/" />
        <Link to="/products">Products LINK</Link>
        <h1 className="text-amber-300">{t('site_title')}</h1>
        {/* Header with sunset background */}
        {/* <div className="relative h-48 bg-red-100 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-red-400/30 to-red-500/30" />
            <div className="relative p-4 space-y-2">
                <h1 className="text-2xl font-medium text-white">Ngao du theo quý!</h1>
                <p className="text-sm text-white">Thưởng thức thế giới theo đẹp</p>
                <p className="text-sm text-white">Tận hưởng từng phút giây sống theo cách riêng của mình</p>
                // Search bar
                <div className="mt-4 relative">
                    <input
                        type="text"
                        placeholder="Bạn đang muốn đi đâu nhỉ"
                        className="w-full p-3 pr-10 rounded-lg shadow-sm"
                    />
                    <Search className="absolute right-3 top-3 text-gray-400" size={20} />
                </div>
            </div>
        </div> */}

        {/* Navigation Grid */}
        {/* <div className="p-4 bg-white">
            <div className="grid grid-cols-3 gap-4">
                <NavItem icon={<Map />} label="Tour" color="bg-orange-100" textColor="text-orange-500" />
                <NavItem icon={<Ticket />} label="Vé tham quan & Trải nghiệm" color="bg-red-100" textColor="text-red-500" />
                <NavItem icon={<Utensils />} label="Ẩm thực" color="bg-teal-100" textColor="text-teal-500" />
                <NavItem icon={<Bus />} label="Phương tiện đi lại" color="bg-red-100" textColor="text-red-500" />
                <NavItem icon={<UserPlus />} label="Hướng dẫn viên" color="bg-teal-100" textColor="text-teal-500" />
                <NavItem icon={<FileText />} label="Visa" color="bg-orange-100" textColor="text-orange-500" />
            </div>
        </div> */}

        {/* Featured Tours */}
        {/* <Section title="Tour nổi bật">
            <div className="flex space-x-4 overflow-x-auto pb-4">
                <TourCard
                    image="/api/placeholder/400/200"
                    title="Tham quan chùa ở Kyoto"
                />
                <TourCard
                    image="/api/placeholder/400/200"
                    title="Bảo tàng Louvre - Paris"
                />
                <TourCard
                    image="/api/placeholder/400/200"
                    title="Mùa lá đỏ Canada"
                />
            </div>
        </Section> */}

        {/* Visa Section */}
        {/* <Section title="Visa">
            <div className="space-y-2">
                <VisaItem country="Mỹ" type="Visa du lịch" />
                <VisaItem country="Hàn Quốc" type="Visa du lịch" />
                <VisaItem country="Tây Ban Nha" type="Visa Schengen - du lịch" />
                <VisaItem country="Thụy Sỹ" type="Visa Schengen - du lịch" />
                <VisaItem country="Canada" type="Visa du lịch" />
                <VisaItem country="Nhật" type="Visa du lịch" />
            </div>
        </Section> */}

        {/* Popular Destinations */}
        {/* <Section title="Điểm đến được yêu thích">
            <div className="grid grid-cols-2 gap-4">
                <DestinationCard
                    image="/api/placeholder/400/200"
                    title="New York"
                />
                <DestinationCard
                    image="/api/placeholder/400/200"
                    title="Santorini"
                />
                <DestinationCard
                    image="/api/placeholder/400/200"
                    title="Singapore"
                />
            </div>
        </Section> */}
    </div>;
}

export default HomePage;