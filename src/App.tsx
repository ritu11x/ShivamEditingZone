 import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Users,
  Eye,
  Video,
  Calendar,
  Facebook,
  Instagram,
  Mail,
  Youtube,
  Phone,
  ArrowRight,
  Sparkles,
  Award,
  Heart,
  MapPin,
  IndianRupee,
  Star,
  Search,
  ShoppingBag,
} from "lucide-react";
import { fetchYouTubeStats } from "./youtubeApi";

interface Product {
  id: string;
  name: string;
  nameMarathi?: string;
  price: number;
  category: string;
  thumbnail: string;
}
interface Category {
  id: string;
  name: string;
  nameMarathi?: string;
  description: string;
  count: number;
  icon: string; // Add this line
}

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(() => {
    // Get saved section from localStorage, default to "home"
    return localStorage.getItem("activeSection") || "home";
  });
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    message: "",
  });
  const [showYouTubePopup, setShowYouTubePopup] = useState(false);
  const [popupShownThisSession, setPopupShownThisSession] = useState(false);

  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [feedbackData, setFeedbackData] = useState({
    name: "",
    role: "",
    rating: 5,
    feedback: "",
    whatsapp: "",
  });
  // NEW: YouTube stats state
  const [youtubeStats, setYoutubeStats] = useState({
    subscriberCount: "15.9K",
    videoCount: "873",
    viewCount: "2.7M+",
    loading: true,
    error: false,
  });

  // NEW: Fetch YouTube stats on component mount and every hour
  useEffect(() => {
    const loadYouTubeStats = async () => {
      const stats = await fetchYouTubeStats();
      setYoutubeStats(stats);
    };

    // Fetch immediately on load
    loadYouTubeStats();

    // Fetch every hour (3600000 milliseconds)
    const interval = setInterval(loadYouTubeStats, 3600000);

    return () => clearInterval(interval);
  }, []);

  // Complete Product Catalog from WhatsApp Business

  const allProducts: Product[] = [
    // Wedding Cards (लग्न पत्रिका) - Using actual product images
    {
      id: "w1",
      name: "Wedding Card 01",
      nameMarathi: "लग्न पत्रिका 01 (with photo)",
      price: 200,
      category: "wedding",
      thumbnail: "/products/wedding/wedding-card-with-photo/wedding-01.jpeg",
    },
    {
      id: "w2",
      name: "Wedding Card 02",
      nameMarathi: "लग्न पत्रिका 02 (with photo)",
      price: 200,
      category: "wedding",
      thumbnail: "/products/wedding/wedding-card-with-photo/wedding-02.jpeg",
    },
    {
      id: "w3",
      name: "Wedding Card 03",
      nameMarathi: "लग्न पत्रिका 03 (with photo)",
      price: 200,
      category: "wedding",
      thumbnail: "/products/wedding/wedding-card-with-photo/wedding-03.jpeg",
    },
    {
      id: "w4",
      name: "Wedding Card 04",
      nameMarathi: "लग्न पत्रिका 04 (with photo)",
      price: 200,
      category: "wedding",
      thumbnail: "/products/wedding/wedding-card-with-photo/wedding-04.jpeg",
    },
    {
      id: "w5",
      name: "Wedding Card 05",
      nameMarathi: "लग्न पत्रिका 05 (with photo)",
      price: 200,
      category: "wedding",
      thumbnail: "/products/wedding/wedding-card-with-photo/wedding-05.jpeg",
    },
    {
      id: "w6",
      name: "Wedding Card 06",
      nameMarathi: "लग्न पत्रिका 06 (with photo)",
      price: 200,
      category: "wedding",
      thumbnail: "/products/wedding/wedding-card-with-photo/wedding-06.jpeg",
    },
    {
      id: "w7",
      name: "Wedding Card 07",
      nameMarathi: "लग्न पत्रिका 07 (with photo)",
      price: 200,
      category: "wedding",
      thumbnail: "/products/wedding/wedding-card-with-photo/wedding-07.jpeg",
    },
    {
      id: "w8",
      name: "Wedding Card 08",
      nameMarathi: "लग्न पत्रिका 08 (with photo)",
      price: 200,
      category: "wedding",
      thumbnail: "/products/wedding/wedding-card-with-photo/wedding-08.jpeg",
    },
    {
      id: "w9",
      name: "Wedding Card 09",
      nameMarathi: "लग्न पत्रिका 09 (with photo)",
      price: 200,
      category: "wedding",
      thumbnail: "/products/wedding/wedding-card-with-photo/wedding-09.jpeg",
    },
    {
      id: "w10",
      name: "Wedding Card 10",
      nameMarathi: "लग्न पत्रिका 10 (with photo)",
      price: 200,
      category: "wedding",
      thumbnail: "/products/wedding/wedding-card-with-photo/wedding-10.jpeg",
    },

    {
      id: "w11",
      name: "Wedding Card 11",
      nameMarathi: "लग्न पत्रिका 11 (without photo)",
      price: 200,
      category: "wedding",
      thumbnail: "/products/wedding/wedding-card-without-photo/wedding-01.jpeg",
    },
    {
      id: "w12",
      name: "Wedding Card 12",
      nameMarathi: "लग्न पत्रिका 12 (without photo)",
      price: 200,
      category: "wedding",
      thumbnail: "/products/wedding/wedding-card-without-photo/wedding-02.jpeg",
    },
    {
      id: "w13",
      name: "Wedding Card 13",
      nameMarathi: "लग्न पत्रिका 13 (without photo)",
      price: 200,
      category: "wedding",
      thumbnail: "/products/wedding/wedding-card-without-photo/wedding-03.jpeg",
    },
    {
      id: "w14",
      name: "Wedding Card 14",
      nameMarathi: "लग्न पत्रिका 14 (without photo)",
      price: 200,
      category: "wedding",
      thumbnail: "/products/wedding/wedding-card-without-photo/wedding-04.jpeg",
    },
    {
      id: "w15",
      name: "Wedding Card 15",
      nameMarathi: "लग्न पत्रिका 15 (without photo)",
      price: 200,
      category: "wedding",
      thumbnail: "/products/wedding/wedding-card-without-photo/wedding-05.jpeg",
    },
    {
      id: "w16",
      name: "Wedding Card 16",
      nameMarathi: "लग्न पत्रिका 16 (without photo)",
      price: 200,
      category: "wedding",
      thumbnail: "/products/wedding/wedding-card-without-photo/wedding-06.jpeg",
    },
    {
      id: "w17",
      name: "Wedding Card 17",
      nameMarathi: "लग्न पत्रिका 17 (without photo)",
      price: 200,
      category: "wedding",
      thumbnail: "/products/wedding/wedding-card-without-photo/wedding-07.jpeg",
    },
    {
      id: "w18",
      name: "Wedding Card 18",
      nameMarathi: "लग्न पत्रिका 18 (without photo)",
      price: 200,
      category: "wedding",
      thumbnail: "/products/wedding/wedding-card-without-photo/wedding-08.jpeg",
    },
    {
      id: "w19",
      name: "Wedding Card 19",
      nameMarathi: "लग्न पत्रिका 19 (without photo)",
      price: 200,
      category: "wedding",
      thumbnail: "/products/wedding/wedding-card-without-photo/wedding-09.jpeg",
    },
    {
      id: "w20",
      name: "Wedding Card 20",
      nameMarathi: "लग्न पत्रिका 20 (without photo)",
      price: 200,
      category: "wedding",
      thumbnail: "/products/wedding/wedding-card-without-photo/wedding-10.jpeg",
    },

    // प्रथम पुण्यस्मरण
    {
      id: "pp1",
      name: "First-Memorial Card 01",
      nameMarathi: "प्रथम पुण्यस्मरण 01",
      price: 200,
      category: "प्रथम पुण्यस्मरण",
      thumbnail: "/products/first-memorial/first-memorial-01.jpeg",
    },
    {
      id: "pp2",
      name: "First-Memorial Card 02",
      nameMarathi: "प्रथम पुण्यस्मरण 02",
      price: 200,
      category: "प्रथम पुण्यस्मरण",
      thumbnail: "/products/first-memorial/first-memorial-02.jpeg",
    },
    {
      id: "pp3",
      name: "First-Memorial Card 03",
      nameMarathi: "प्रथम पुण्यस्मरण 03",
      price: 200,
      category: "प्रथम पुण्यस्मरण",
      thumbnail: "/products/first-memorial/first-memorial-03.jpeg",
    },
    {
      id: "pp4",
      name: "First-Memorial Card 04",
      nameMarathi: "प्रथम पुण्यस्मरण 04",
      price: 200,
      category: "प्रथम पुण्यस्मरण",
      thumbnail: "/products/first-memorial/first-memorial-04.jpeg",
    },
    {
      id: "pp5",
      name: "First-Memorial Card 05",
      nameMarathi: "प्रथम पुण्यस्मरण 05",
      price: 200,
      category: "प्रथम पुण्यस्मरण",
      thumbnail: "/products/first-memorial/first-memorial-05.jpeg",
    },
    {
      id: "pp6",
      name: "First-Memorial Card 06",
      nameMarathi: "प्रथम पुण्यस्मरण 06",
      price: 200,
      category: "प्रथम पुण्यस्मरण",
      thumbnail: "/products/first-memorial/first-memorial-06.jpeg",
    },
    {
      id: "pp7",
      name: "First-Memorial Card 07",
      nameMarathi: "प्रथम पुण्यस्मरण 07",
      price: 200,
      category: "प्रथम पुण्यस्मरण",
      thumbnail: "/products/first-memorial/first-memorial-07.jpeg",
    },
    {
      id: "pp8",
      name: "First-Memorial Card 08",
      nameMarathi: "प्रथम पुण्यस्मरण 08",
      price: 200,
      category: "प्रथम पुण्यस्मरण",
      thumbnail: "/products/first-memorial/first-memorial-08.jpeg",
    },
    {
      id: "pp9",
      name: "First-Memorial Card 09",
      nameMarathi: "प्रथम पुण्यस्मरण 09",
      price: 200,
      category: "प्रथम पुण्यस्मरण",
      thumbnail: "/products/first-memorial/first-memorial-09.jpeg",
    },
    {
      id: "pp10",
      name: "First-Memorial card 10",
      nameMarathi: "प्रथम पुण्यस्मरण 10",
      price: 200,
      category: "प्रथम पुण्यस्मरण",
      thumbnail: "/products/first-memorial/first-memorial-10.jpeg",
    },

    // Birthday
    {
      id: "b1",
      name: "Birthday Banner 01",
      price: 150,
      category: "birthday",
      thumbnail: "/products/birthday/birthday-01.jpeg",
    },
    {
      id: "b2",
      name: "Birthday Banner 02",
      price: 150,
      category: "birthday",
      thumbnail: "/products/birthday/birthday-02.jpeg",
    },
    {
      id: "b3",
      name: "Birthday Banner 03",
      price: 150,
      category: "birthday",
      thumbnail: "/products/birthday/birthday-03.jpeg",
    },
    {
      id: "b4",
      name: "Birthday Banner 04",
      price: 150,
      category: "birthday",
      thumbnail: "/products/birthday/birthday-04.jpeg",
    },
    {
      id: "b5",
      name: "Birthday Banner 05",
      price: 150,
      category: "birthday",
      thumbnail: "/products/birthday/birthday-05.jpeg",
    },
    {
      id: "b6",
      name: "Birthday Banner 06",
      price: 150,
      category: "birthday",
      thumbnail: "/products/birthday/birthday-06.jpeg",
    },
    {
      id: "b7",
      name: "Birthday Banner 07",
      price: 150,
      category: "birthday",
      thumbnail: "/products/birthday/birthday-07.jpeg",
    },
    {
      id: "b8",
      name: "Birthday Banner 08",
      price: 150,
      category: "birthday",
      thumbnail: "/products/birthday/birthday-08.jpeg",
    },
    {
      id: "b9",
      name: "Birthday Banner 09",
      price: 150,
      category: "birthday",
      thumbnail: "/products/birthday/birthday-09.jpeg",
    },
    {
      id: "b10",
      name: "Birthday Banner 10",
      price: 150,
      category: "birthday",
      thumbnail: "/products/birthday/birthday-10.jpeg",
    },

    // Engagement
    {
      id: "e1",
      name: "Engagement Card 01",
      price: 150,
      category: "engagement",
      thumbnail: "/products/engagement/engagement-01.jpeg",
    },
    {
      id: "e2",
      name: "Engagement Card 02",
      price: 150,
      category: "engagement",
      thumbnail: "/products/engagement/engagement-02.jpeg",
    },
    {
      id: "e3",
      name: "Engagement Card 03",
      price: 150,
      category: "engagement",
      thumbnail: "/products/engagement/engagement-03.jpeg",
    },
    {
      id: "e4",
      name: "Engagement card 04",
      price: 150,
      category: "engagement",
      thumbnail: "/products/engagement/engagement-04.jpeg",
    },
    {
      id: "e5",
      name: "Engagement card 05",
      price: 150,
      category: "engagement",
      thumbnail: "/products/engagement/engagement-05.jpeg",
    },
    {
      id: "e6",
      name: "Engagement card 06",
      price: 150,
      category: "engagement",
      thumbnail: "/products/engagement/engagement-06.jpeg",
    },
    {
      id: "e7",
      name: "Engagement card 07",
      price: 150,
      category: "engagement",
      thumbnail: "/products/engagement/engagement-07.jpeg",
    },
    {
      id: "e8",
      name: "Engagement card 08",
      price: 150,
      category: "engagement",
      thumbnail: "/products/engagement/engagement-08.jpeg",
    },
    {
      id: "e9",
      name: "Engagement card 09",
      price: 150,
      category: "engagement",
      thumbnail: "/products/engagement/engagement-09.jpeg",
    },
    {
      id: "e10",
      name: "Engagement card 10",
      price: 150,
      category: "engagement",
      thumbnail: "/products/engagement/engagement-10.jpeg",
    },

    // House-Warning
    {
      id: "h1",
      name: "House-Warning 01",
      price: 150,
      category: "House-Warning",
      thumbnail: "/products/house-warning/house-warning-01.jpeg",
    },
    {
      id: "h2",
      name: "House-Warning 02",
      price: 150,
      category: "House-Warning",
      thumbnail: "/products/house-warning/house-warning-02.jpeg",
    },
    {
      id: "h3",
      name: "House-Warning 03",
      price: 150,
      category: "House-Warning",
      thumbnail: "/products/house-warning/house-warning-03.jpeg",
    },
    {
      id: "h4",
      name: "House-Warning 04",
      price: 150,
      category: "House-Warning",
      thumbnail: "/products/house-warning/house-warning-04.jpeg",
    },
    {
      id: "h5",
      name: "House-Warning 05",
      price: 150,
      category: "House-Warning",
      thumbnail: "/products/house-warning/house-warning-05.jpeg",
    },
    {
      id: "h6",
      name: "House-Warning 06",
      price: 150,
      category: "House-Warning",
      thumbnail: "/products/house-warning/house-warning-06.jpeg",
    },
    {
      id: "h7",
      name: "House-Warning 07",
      price: 150,
      category: "House-Warning",
      thumbnail: "/products/house-warning/house-warning-07.jpeg",
    },
    {
      id: "h8",
      name: "House-Warning 08",
      price: 150,
      category: "House-Warning",
      thumbnail: "/products/house-warning/house-warning-08.jpeg",
    },
    {
      id: "h9",
      name: "House-Warning 09",
      price: 150,
      category: "House-Warning",
      thumbnail: "/products/house-warning/house-warning-09.jpeg",
    },
    {
      id: "h10",
      name: "House-Warning 10",
      price: 150,
      category: "House-Warning",
      thumbnail: "/products/house-warning/house-warning-10.jpeg",
    },

    // Baby-Shower
    {
      id: "bs1",
      name: "Baby-Shower 01",
      price: 150,
      category: "Baby-Shower",
      thumbnail: "/products/baby-shower/baby-shower-01.jpeg",
    },
    {
      id: "bs2",
      name: "Baby-Shower 02",
      price: 150,
      category: "Baby-Shower",
      thumbnail: "/products/baby-shower/baby-shower-02.jpeg",
    },
    {
      id: "bs3",
      name: "Baby-Shower 03",
      price: 150,
      category: "Baby-Shower",
      thumbnail: "/products/baby-shower/baby-shower-03.jpeg",
    },
    {
      id: "bs4",
      name: "Baby-Shower 04",
      price: 150,
      category: "Baby-Shower",
      thumbnail: "/products/baby-shower/baby-shower-04.jpeg",
    },
    {
      id: "bs5",
      name: "Baby-Shower 05",
      price: 150,
      category: "Baby-Shower",
      thumbnail: "/products/baby-shower/baby-shower-05.jpeg",
    },
    {
      id: "bs6",
      name: "Baby-Shower 06",
      price: 150,
      category: "Baby-Shower",
      thumbnail: "/products/baby-shower/baby-shower-06.jpeg",
    },
    {
      id: "bs7",
      name: "Baby-Shower 07",
      price: 150,
      category: "Baby-Shower",
      thumbnail: "/products/baby-shower/baby-shower-07.jpeg",
    },
    {
      id: "bs8",
      name: "Baby-Shower 08",
      price: 150,
      category: "Baby-Shower",
      thumbnail: "/products/baby-shower/baby-shower-08.jpeg",
    },
    {
      id: "bs9",
      name: "Baby-Shower 09",
      price: 150,
      category: "Baby-Shower",
      thumbnail: "/products/baby-shower/baby-shower-09.jpeg",
    },
    {
      id: "bs10",
      name: "Baby-Shower 10",
      price: 150,
      category: "Baby-Shower",
      thumbnail: "/products/baby-shower/baby-shower-10.jpeg",
    },
    {
      id: "bs11",
      name: "Baby-Shower 11",
      price: 150,
      category: "Baby-Shower",
      thumbnail: "/products/baby-shower/baby-shower-11.jpeg",
    },

    // Naming-Ceremony
    {
      id: "nc1",
      name: "Naming-Ceremony 01",
      price: 150,
      category: "Naming-Ceremony",
      thumbnail: "/products/naming-ceremony/naming-ceremony-01.jpeg",
    },
    {
      id: "nc2",
      name: "Naming-Ceremony 02",
      price: 150,
      category: "Naming-Ceremony",
      thumbnail: "/products/naming-ceremony/naming-ceremony-02.jpeg",
    },
    {
      id: "nc3",
      name: "Naming-Ceremony 03",
      price: 150,
      category: "Naming-Ceremony",
      thumbnail: "/products/naming-ceremony/naming-ceremony-03.jpeg",
    },
    {
      id: "nc4",
      name: "Naming-Ceremony 04",
      price: 150,
      category: "Naming-Ceremony",
      thumbnail: "/products/naming-ceremony/naming-ceremony-04.jpeg",
    },
    {
      id: "nc5",
      name: "Naming-Ceremony 05",
      price: 150,
      category: "Naming-Ceremony",
      thumbnail: "/products/naming-ceremony/naming-ceremony-05.jpeg",
    },
    {
      id: "nc6",
      name: "Naming-Ceremony 06",
      price: 150,
      category: "Naming-Ceremony",
      thumbnail: "/products/naming-ceremony/naming-ceremony-06.jpeg",
    },
    {
      id: "nc7",
      name: "Naming-Ceremony 07",
      price: 150,
      category: "Naming-Ceremony",
      thumbnail: "/products/naming-ceremony/naming-ceremony-07.jpeg",
    },
    {
      id: "nc8",
      name: "Naming-Ceremony 08",
      price: 150,
      category: "Naming-Ceremony",
      thumbnail: "/products/naming-ceremony/naming-ceremony-08.jpeg",
    },
    {
      id: "nc9",
      name: "Naming-Ceremony 09",
      price: 150,
      category: "Naming-Ceremony",
      thumbnail: "/products/naming-ceremony/naming-ceremony-09.jpeg",
    },
    {
      id: "nc10",
      name: "Naming-Ceremony 10",
      price: 150,
      category: "Naming-Ceremony",
      thumbnail: "/products/naming-ceremony/naming-ceremony-10.jpeg",
    },

    // // Festival
    // { id: 'f1', name: 'Diwali Banner', price: 300, category: 'festival', thumbnail: 'https://images.unsplash.com/photo-1605979399824-5d5fb9e4df1c?w=400&h=500&fit=crop' },
    // { id: 'f2', name: 'Ganesh Chaturthi Banner', price: 300, category: 'festival', thumbnail: 'https://images.unsplash.com/photo-1599827552599-eadf5fb3c75f?w=400&h=500&fit=crop' },
    // { id: 'f3', name: 'Holi Banner', price: 250, category: 'festival', thumbnail: 'https://images.unsplash.com/photo-1583241800698-c318672ac363?w=400&h=500&fit=crop' },
    // { id: 'f4', name: 'Navratri Banner', price: 300, category: 'festival', thumbnail: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400&h=500&fit=crop' },
    // { id: 'f5', name: 'Festival Poster 01', price: 250, category: 'festival', thumbnail: 'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=400&h=500&fit=crop' },

    // 3D-Logos
    // ganesh logos
    {
      id: "gl1",
      name: "ganesh Logo 01",
      price: 250,
      category: "logo",
      thumbnail: "/products/3d-logos/ganeshmandallogos/3d-ganesh-logo-01.jpeg",
    },
    {
      id: "gl2",
      name: "ganesh Logo 02",
      price: 250,
      category: "logo",
      thumbnail: "/products/3d-logos/ganeshmandallogos/3d-ganesh-logo-02.jpeg",
    },
    {
      id: "gl3",
      name: "ganesh Logo 03",
      price: 250,
      category: "logo",
      thumbnail: "/products/3d-logos/ganeshmandallogos/3d-ganesh-logo-03.jpeg",
    },
    {
      id: "gl4",
      name: "ganesh Logo 04",
      price: 250,
      category: "logo",
      thumbnail: "/products/3d-logos/ganeshmandallogos/3d-ganesh-logo-04.jpeg",
    },
    {
      id: "gl5",
      name: "ganesh Logo 05",
      price: 250,
      category: "logo",
      thumbnail: "/products/3d-logos/ganeshmandallogos/3d-ganesh-logo-05.jpeg",
    },
    {
      id: "gl6",
      name: "ganesh Logo 06",
      price: 250,
      category: "logo",
      thumbnail: "/products/3d-logos/ganeshmandallogos/3d-ganesh-logo-06.jpeg",
    },
    {
      id: "gl7",
      name: "ganesh Logo 07",
      price: 250,
      category: "logo",
      thumbnail: "/products/3d-logos/ganeshmandallogos/3d-ganesh-logo-07.jpeg",
    },
    {
      id: "gl8",
      name: "ganesh Logo 08",
      price: 250,
      category: "logo",
      thumbnail: "/products/3d-logos/ganeshmandallogos/3d-ganesh-logo-08.jpeg",
    },
    {
      id: "gl9",
      name: "ganesh Logo 09",
      price: 250,
      category: "logo",
      thumbnail: "/products/3d-logos/ganeshmandallogos/3d-ganesh-logo-09.jpeg",
    },
    {
      id: "gl10",
      name: "ganesh Logo 10",
      price: 250,
      category: "logo",
      thumbnail: "/products/3d-logos/ganeshmandallogos/3d-ganesh-logo-10.jpeg",
    },
    {
      id: "gl11",
      name: "ganesh Logo 11",
      price: 250,
      category: "logo",
      thumbnail: "/products/3d-logos/ganeshmandallogos/3d-ganesh-logo-11.jpeg",
    },
    {
      id: "gl12",
      name: "ganesh Logo 12",
      price: 250,
      category: "logo",
      thumbnail: "/products/3d-logos/ganeshmandallogos/3d-ganesh-logo-12.jpeg",
    },

    // Navratri Logos
    {
      id: "nl1",
      name: "Navratri Logo 01",
      price: 250,
      category: "logo",
      thumbnail:
        "/products/3d-logos/navratrimandallogos/3d-navratri-logo-01.jpeg",
    },
    {
      id: "nl2",
      name: "Navratri Logo 02",
      price: 250,
      category: "logo",
      thumbnail:
        "/products/3d-logos/navratrimandallogos/3d-navratri-logo-02.jpeg",
    },
    {
      id: "nl3",
      name: "Navratri Logo 03",
      price: 250,
      category: "logo",
      thumbnail:
        "/products/3d-logos/navratrimandallogos/3d-navratri-logo-03.jpeg",
    },
    {
      id: "nl4",
      name: "Navratri Logo 04",
      price: 250,
      category: "logo",
      thumbnail:
        "/products/3d-logos/navratrimandallogos/3d-navratri-logo-04.jpeg",
    },
    {
      id: "nl5",
      name: "Navratri Logo 05",
      price: 250,
      category: "logo",
      thumbnail:
        "/products/3d-logos/navratrimandallogos/3d-navratri-logo-05.jpeg",
    },
    {
      id: "nl6",
      name: "Navratri Logo 06",
      price: 250,
      category: "logo",
      thumbnail:
        "/products/3d-logos/navratrimandallogos/3d-navratri-logo-06.jpeg",
    },
    {
      id: "nl7",
      name: "Navratri Logo 07",
      price: 250,
      category: "logo",
      thumbnail:
        "/products/3d-logos/navratrimandallogos/3d-navratri-logo-07.jpeg",
    },
    {
      id: "nl8",
      name: "Navratri Logo 08",
      price: 250,
      category: "logo",
      thumbnail:
        "/products/3d-logos/navratrimandallogos/3d-navratri-logo-08.jpeg",
    },
    {
      id: "nl9",
      name: "Navratri Logo 09",
      price: 250,
      category: "logo",
      thumbnail:
        "/products/3d-logos/navratrimandallogos/3d-navratri-logo-09.jpeg",
    },
    {
      id: "nl10",
      name: "Navratri Logo 10",
      price: 250,
      category: "logo",
      thumbnail:
        "/products/3d-logos/navratrimandallogos/3d-navratri-logo-10.jpeg",
    },
    {
      id: "nl11",
      name: "Navratri Logo 11",
      price: 250,
      category: "logo",
      thumbnail:
        "/products/3d-logos/navratrimandallogos/3d-navratri-logo-11.jpeg",
    },
    {
      id: "nl12",
      name: "Navratri Logo 12",
      price: 250,
      category: "logo",
      thumbnail:
        "/products/3d-logos/navratrimandallogos/3d-navratri-logo-12.jpeg",
    },
    {
      id: "nl13",
      name: "Navratri Logo 13",
      price: 250,
      category: "logo",
      thumbnail:
        "/products/3d-logos/navratrimandallogos/3d-navratri-logo-13.jpeg",
    },
  ];

  const categories: Category[] = [
    {
      id: "wedding",
      name: "Wedding Cards",
      nameMarathi: "लग्न पत्रिका",
      description: "Elegant wedding invitation and banner designs",
      count: allProducts.filter((p) => p.category === "wedding").length,
      icon: "/products/wedding/wedding-card-with-photo/wedding-01.jpeg", // Add this
    },
    {
      id: "प्रथम पुण्यस्मरण",
      name: "First Memorial",
      nameMarathi: "प्रथम पुण्यस्मरण",
      description: "Memorial cards and remembrance designs",
      count: allProducts.filter((p) => p.category === "प्रथम पुण्यस्मरण")
        .length,
      icon: "/products/first-memorial/first-memorial-01.jpeg", // Add this
    },
    {
      id: "birthday",
      name: "Birthday",
      description: "Creative birthday banner and poster designs",
      count: allProducts.filter((p) => p.category === "birthday").length,
      icon: "/products/birthday/birthday-01.jpeg", // Add this
    },
    {
      id: "engagement",
      name: "Engagement",
      description: "Beautiful engagement invitation cards",
      count: allProducts.filter((p) => p.category === "engagement").length,
      icon: "/products/engagement/engagement-01.jpeg", // Add this
    },
    {
      id: "House-Warning",
      name: "House Warming",
      description: "Housewarming ceremony invitations",
      count: allProducts.filter((p) => p.category === "House-Warning").length,
      icon: "/products/house-warning/house-warning-01.jpeg", // Add this
    },
    {
      id: "Baby-Shower",
      name: "Baby Shower",
      description: "Baby-Shower celebration cards",
      count: allProducts.filter((p) => p.category === "Baby-Shower").length,
      icon: "/products/baby-shower/baby-shower-01.jpeg", // Add this
    },
    {
      id: "Naming-Ceremony",
      name: "Naming Ceremony",
      description: "Naming-Ceremony invitation cards",
      count: allProducts.filter((p) => p.category === "Naming-Ceremony").length,
      icon: "/products/naming-ceremony/naming-ceremony-01.jpeg", // Add this
    },
    {
      id: "logo",
      name: "3D Logos",
      description: "Professional 3D logo designs",
      count: allProducts.filter((p) => p.category === "logo").length,
      icon: "/products/3d-logos/ganeshmandallogos/3d-ganesh-logo-01.jpeg", // Add this
    },
  ];

  const filteredProducts = selectedCategory
    ? allProducts.filter((product) => {
        const matchesCategory = product.category === selectedCategory.id;
        const matchesSearch =
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (product.nameMarathi && product.nameMarathi.includes(searchQuery));
        return matchesCategory && matchesSearch;
      })
    : [];

  // UPDATED: Stats now use real-time YouTube data
  const stats = [
    { icon: Users, label: "Subscribers", value: youtubeStats.subscriberCount },
    { icon: Video, label: "Videos", value: youtubeStats.videoCount },
    { icon: Eye, label: "Total Views", value: youtubeStats.viewCount },
    {
      icon: ShoppingBag,
      label: "Products",
      value: allProducts.length.toString(),
    },
  ];

  const milestones = [
    { count: "1K", date: "27 Jun 2021" },
    { count: "5K", date: "29 Sep 2023" },
    { count: "10K", date: "24 Aug 2024" },
    { count: "15K", date: "27 Jul 2025" },
  ];

  // ADD THIS NEW ARRAY ⬇️

  const handleOrderOnWhatsApp = (product: Product) => {
    const productName = product.nameMarathi
      ? `${product.nameMarathi} (${product.name})`
      : product.name;

    // Using direct emoji characters
    const message = [
      "👋 Hi!",
      "",
      "📦 Product: " + productName,
      "💰 Price: Rs " + product.price,
      "",
      "I need:",
      "✅ Customization details",
      "⚡ Fast delivery",
      "",
      "Please confirm availability.",
      "",
      "🙏 Thanks!",
    ].join("\n");

    // Open WhatsApp with the message
    const phoneNumber = "918805817052";
    const url =
      "https://api.whatsapp.com/send?phone=" +
      phoneNumber +
      "&text=" +
      encodeURIComponent(message);
    window.open(url, "_blank");
  };
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `New Contact Form Submission:\n\nName: ${formData.name}\nWhatsApp: ${formData.whatsapp}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    const url = `https://wa.me/918805817052?text=${encodeURIComponent(
      message,
    )}`;
    window.open(url, "_blank");
    setFormData({ name: "", whatsapp: "", email: "", message: "" });
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const stars = "⭐".repeat(feedbackData.rating);
    const message = `New Testimonial Submission:\n\n${stars}\n\nName: ${feedbackData.name}\nRole: ${feedbackData.role || "Customer"}\nRating: ${feedbackData.rating}/5\n\nFeedback:\n"${feedbackData.feedback}"\n\nWhatsApp: ${feedbackData.whatsapp || "Not provided"}`;
    const url = `https://wa.me/918805817052?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setFeedbackData({
      name: "",
      role: "",
      rating: 5,
      feedback: "",
      whatsapp: "",
    });
    setShowFeedbackForm(false);
    alert("Thank you for your feedback! We'll review it soon. 🙏");
  };

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    setSelectedProduct(null);
    // Save to localStorage
    localStorage.setItem("activeSection", section);
  };

  const openCategory = (category: Category) => {
    setSelectedCategory(category);
    setSelectedProduct(null);
    // Make sure we're on catalog section
    setActiveSection("catalog");
    localStorage.setItem("activeSection", "catalog");
  };
  // Show YouTube popup after 3 seconds
  useEffect(() => {
    if (activeSection === "home" && !popupShownThisSession) {
      const timer = setTimeout(() => {
        setShowYouTubePopup(true);
        setPopupShownThisSession(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [activeSection, popupShownThisSession]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <nav className="bg-gradient-to-r from-black via-gray-900 to-black shadow-2xl fixed w-full top-0 z-50 border-b border-red-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              <img
                src="/logo.png"
                alt="Shivam Editing Zone Logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <span className="text-xl font-black bg-gradient-to-r from-red-500 via-red-400 to-orange-500 bg-clip-text text-transparent">
                  SHIVAM
                </span>
                <div className="text-xs text-white font-medium tracking-wider">
                  EDITING ZONE
                </div>
              </div>
            </div>
            <div className="hidden md:flex space-x-1">
              {["home", "catalog", "about", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`relative px-6 py-2 capitalize font-semibold transition-all duration-300 rounded-lg group ${
                    activeSection === section
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {activeSection === section && (
                    <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 rounded-lg"></span>
                  )}
                  <span className="relative z-10">{section}</span>
                  {activeSection !== section && (
                    <span className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  )}
                </button>
              ))}
            </div>
            <button
              className="md:hidden text-white hover:text-red-500 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-red-500/20">
            {["home", "catalog", "about", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`block w-full text-left px-6 py-4 capitalize font-semibold transition-all ${
                  activeSection === section
                    ? "bg-gradient-to-r from-red-600 to-orange-600 text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </nav>

      {activeSection === "home" && (
        <>
          <section className="pt-24 pb-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 bg-red-100 px-4 py-2 rounded-full mb-6">
                  <Sparkles className="w-5 h-5 text-red-600" />
                  <span className="text-red-600 font-semibold">
                    Welcome to Shivam Editing Zone
                  </span>
                </div>

                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight tracking-tight"
                  style={{ fontFamily: "Elsie Black, serif" }}
                >
                  PROFESSIONAL GRAPHIC DESIGN
                  <span className="block text-red-600">SERVICES</span>
                </h1>

                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Explore Our Exclusive Catalog – 5000+ premium designs for
                  weddings, birthdays, festivals, social media, and businesses.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => scrollToSection("catalog")}
                    className="flex items-center space-x-2 bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-all"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span>Browse Catalog</span>
                  </button>
                  <a
                    href="https://wa.me/918805817052"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Contact on WhatsApp</span>
                  </a>
                </div>

                <div className="relative rounded-3xl overflow-hidden shadow-2xl my-12 group">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 blur-2xl group-hover:blur-3xl transition-all duration-500"></div>

                  {/* Main Banner */}
                  <div className="relative bg-gradient-to-r from-black via-gray-900 to-black border-2 border-red-500/30 group-hover:border-red-500/60 transition-all duration-300">
                    <img
                      src="banner.png"
                      alt="Shivam - Creator of Shivam Editing Zone"
                      className="w-full h-auto object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget
                          .parentElement!.querySelector(".fallback-banner")!
                          .classList.remove("hidden");
                      }}
                    />

                    {/* Fallback Banner Design */}
                    <div className="fallback-banner hidden">
                      <div className="relative h-64 md:h-80 flex items-center justify-center bg-gradient-to-r from-black via-red-900 to-black">
                        <div className="text-center">
                          <img
                            src="/logo.png"
                            alt="Logo"
                            className="w-32 h-32 mx-auto mb-4 animate-pulse"
                          />
                          <h3 className="text-4xl md:text-6xl font-bold text-white mb-2">
                            THE OFFICIAL CHANNEL OF
                          </h3>
                          <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-red-500 via-red-400 to-orange-500 bg-clip-text text-transparent mb-4">
                            SHIVAM
                          </h2>
                          <p className="text-2xl md:text-4xl font-bold text-white tracking-wider">
                            EDITING ZONE
                          </p>
                          <div className="flex justify-center space-x-4 mt-6">
                            <a
                              href="https://www.youtube.com/@Shivameditingzone"
                              className="bg-red-600 p-3 rounded-full hover:scale-110 transition-transform"
                            >
                              <Youtube className="w-6 h-6 text-white" />
                            </a>
                            <a
                              href="https://wa.me/918805817052"
                              className="bg-green-600 p-3 rounded-full hover:scale-110 transition-transform"
                            >
                              <Phone className="w-6 h-6 text-white" />
                            </a>
                            <a
                              href="https://www.instagram.com/shivam_art21"
                              className="bg-pink-600 p-3 rounded-full hover:scale-110 transition-transform"
                            >
                              <Instagram className="w-6 h-6 text-white" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Shine Effect Overlay */}
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"></div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-lg text-center"
                    >
                      <IconComponent className="w-8 h-8 mx-auto mb-3 text-red-600" />
                      <div className="text-3xl font-bold text-gray-900 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-gray-600 text-sm">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="py-12 px-4 bg-gradient-to-br from-gray-900 via-red-900 to-black relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-48 h-48 bg-red-500 rounded-full filter blur-3xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-64 h-64 bg-orange-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 w-56 h-56 bg-pink-500 rounded-full filter blur-3xl animate-pulse delay-500"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl mb-4 animate-bounce shadow-2xl">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
                  OUR{" "}
                  <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                    JOURNEY
                  </span>
                </h2>
                <p className="text-white text-lg opacity-90 font-semibold">
                  Celebrating growth milestones together
                </p>
                <p className="text-white text-base opacity-90">
                  From a humble start to a thriving creative community, our
                  journey reflects your trust and our dedication to quality
                  designs.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="group relative"
                    style={{
                      animation: `slideInUp 0.6s ease-out ${
                        index * 0.15
                      }s both`,
                    }}
                  >
                    {/* Card Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>

                    {/* Card Content */}
                    <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-red-500/30 group-hover:border-red-500/60 transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-2">
                      {/* Animated Corner Accent */}
                      <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-red-500/20 to-transparent rounded-bl-3xl"></div>
                      <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-tr-3xl"></div>

                      {/* Content */}
                      <div className="relative">
                        <div className="text-5xl md:text-6xl font-black mb-3">
                          <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
                            {milestone.count}
                          </span>
                        </div>
                        <div className="h-1 w-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-3 group-hover:w-full transition-all duration-500"></div>
                        <div className="text-white/80 font-medium text-sm">
                          {milestone.date}
                        </div>

                        {/* Subscriber Badge */}
                        <div className="mt-3 inline-flex items-center px-2 py-1 bg-red-500/20 rounded-full text-xs text-red-400 font-semibold">
                          <Users className="w-3 h-3 mr-1" />
                          Subscribers
                        </div>
                      </div>

                      {/* Shine Effect */}
                      <div className="absolute inset-0 rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Stats - UPDATED with real-time data */}
              <div className="mt-10 text-center">
                <div className="inline-flex items-center space-x-6 bg-white/5 backdrop-blur-lg rounded-full px-6 py-3 border border-white/10">
                  <div className="flex items-center space-x-2">
                    <Video className="w-4 h-4 text-red-400" />
                    <span className="text-white font-semibold text-sm">
                      {youtubeStats.videoCount} Videos
                    </span>
                  </div>
                  <div className="w-px h-4 bg-white/20"></div>
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4 text-orange-400" />
                    <span className="text-white font-semibold text-sm">
                      {youtubeStats.viewCount} Views
                    </span>
                  </div>
                  <div className="w-px h-4 bg-white/20"></div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-yellow-400" />
                    <span className="text-white font-semibold text-sm">
                      Since 2019
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CSS Animation */}
            <style>{`
              @keyframes slideInUp {
                from {
                  opacity: 0;
                  transform: translateY(30px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              .delay-500 {
                animation-delay: 500ms;
              }
              .delay-1000 {
                animation-delay: 1000ms;
              }
            `}</style>
          </section>

          {/* Meet The Creator Section */}
          <section className="py-16 px-4 bg-gradient-to-br from-gray-50 via-white to-slate-50 relative overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(239,68,68,.05) 10px, rgba(239,68,68,.05) 20px)",
                }}
              ></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
              {/* Banner Image Container */}

              {/* Creator Info Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* About Card */}
                <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-red-400 transition-all hover:scale-105 transform duration-300 shadow-lg hover:shadow-xl">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <Users className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      The Creator
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Hi! I'm{" "}
                    <span className="text-red-600 font-semibold">Shivam</span>,
                    and designing is more than my profession-it's my passion.
                    From wedding invitations to festival posters, I love
                    creating designs that bring your imagination to life.
                    Creating magic since 2019! ✨
                  </p>
                </div>

                {/* Mission Card */}
                <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-orange-400 transition-all hover:scale-105 transform duration-300 shadow-lg hover:shadow-xl">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <Award className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    To deliver{" "}
                    <span className="text-orange-600 font-semibold">
                      affordable, premium-quality designs
                    </span>{" "}
                    that add joy, elegance, and creativity to your special
                    occasions. Designs that connect emotionally and celebrate
                    your story. ! 🎨
                  </p>
                </div>

                {/* CTA Card */}
                <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl p-6 hover:scale-105 transform transition-all duration-300 shadow-xl hover:shadow-2xl">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      Join Our Family
                    </h3>
                  </div>
                  <p className="text-white/95 mb-4 leading-relaxed">
                    {youtubeStats.subscriberCount}+ designers trust us.
                    Subscribe for free tutorials and exclusive resources!
                  </p>
                  <a
                    href="https://www.youtube.com/@Shivameditingzone"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-white text-red-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg"
                  >
                    <Youtube className="w-5 h-5" />
                    <span>Subscribe Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {activeSection === "catalog" && !selectedCategory && (
        <section className="pt-24 pb-16 px-4 min-h-screen bg-gradient-to-br from-gray-50 via-white to-slate-50">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-50 to-orange-50 px-4 py-2 rounded-full mb-4">
                <ShoppingBag className="w-5 h-5 text-red-600" />
                <span className="text-red-600 font-semibold">
                  Discover Stunning Designs
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                BROWSE{" "}
                <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  SERVICES
                </span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Dive into a hand-picked collection of{" "}
                <strong>{allProducts.length}+ creative designs</strong> made for
                life's most memorable moments.
              </p>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                From elegant wedding cards to vibrant festival
                posters—everything you need is just one click away.
              </p>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <div
                  key={category.id}
                  onClick={() => openCategory(category)}
                  className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-red-400 transition-all duration-300 cursor-pointer hover:shadow-2xl transform hover:-translate-y-2"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                      src={category.icon}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=300&fit=crop";
                      }}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                    {/* Product Count Badge */}
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-red-600 px-3 py-1.5 rounded-full text-sm font-bold shadow-lg flex items-center space-x-1">
                      <span>{category.count}</span>
                      <span className="text-xs text-gray-500">items</span>
                    </div>

                    {/* Category Name on Image */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-bold text-xl mb-1 drop-shadow-lg">
                        {category.nameMarathi || category.name}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {category.description}
                    </p>

                    {/* Browse Button */}
                    <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-red-600 to-orange-600 text-white py-2.5 rounded-lg font-semibold text-sm group-hover:shadow-lg transition-all">
                      <span>Browse Designs</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Hover Shine Effect */}
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"></div>
                </div>
              ))}
            </div>

            {/* Info Section */}
            <div className="mt-16 text-center">
              <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 rounded-2xl px-8 py-5 border border-red-200 shadow-sm">
                <div className="flex items-center space-x-2">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <ShoppingBag className="w-5 h-5 text-red-600" />
                  </div>
                  <span className="text-gray-900 font-semibold">
                    {allProducts.length} Products
                  </span>
                </div>
                <div className="w-px h-6 bg-red-300"></div>{" "}
                <div className="flex items-center space-x-2">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <IndianRupee className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-900 font-semibold">
                    Starting ₹150
                  </span>
                </div>
                <div className="w-px h-6 bg-red-300"></div>{" "}
                <div className="flex items-center space-x-2">
                  <div className="bg-yellow-100 p-2 rounded-lg">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  </div>
                  <span className="text-gray-900 font-semibold">
                    Premium Quality
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CSS Animation */}
          <style>{`
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    `}</style>
        </section>
      )}

      {selectedCategory && !selectedProduct && (
        <section className="pt-24 pb-16 px-4 min-h-screen">
          <div className="max-w-7xl mx-auto">
            <button
              onClick={() => {
                setSelectedCategory(null);
                setSelectedProduct(null);
              }}
              className="flex items-center space-x-2 text-red-600 hover:text-red-700 mb-8"
            >
              <ArrowRight className="w-5 h-5 transform rotate-180" />
              <span>Back to Categories</span>
            </button>
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                {selectedCategory.nameMarathi || selectedCategory.name}
              </h2>
              <p className="text-gray-600 text-lg">
                {selectedCategory.description}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                {selectedCategory.count} products available
              </p>
            </div>

            {/* Search */}
            <div className="mb-8 max-w-2xl mx-auto">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent"
                />
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2"
                >
                  <div
                    className="relative aspect-[3/4] overflow-hidden cursor-pointer"
                    onClick={() => setSelectedProduct(product)}
                  >
                    <img
                      src={product.thumbnail}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded-lg text-sm font-bold flex items-center">
                      <IndianRupee className="w-3 h-3" />
                      {product.price}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">
                      {product.nameMarathi || product.name}
                    </h3>
                    {product.nameMarathi && (
                      <p className="text-xs text-gray-500 mb-2">
                        {product.name}
                      </p>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-green-600 font-bold flex items-center">
                        <IndianRupee className="w-4 h-4" />
                        {product.price}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProduct(product);
                        }}
                        className="text-xs bg-green-600 text-white px-3 py-1 rounded-full hover:bg-green-700"
                      >
                        Order
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No products found matching your search.
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedProduct.nameMarathi || selectedProduct.name}
                  </h3>
                  {selectedProduct.nameMarathi && (
                    <p className="text-gray-600">{selectedProduct.name}</p>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="aspect-[3/4] overflow-hidden rounded-lg mb-4">
                <img
                  src={selectedProduct.thumbnail}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between bg-green-50 p-4 rounded-lg">
                  <span className="text-gray-700 font-medium">Price:</span>
                  <span className="text-3xl font-bold text-green-600 flex items-center">
                    <IndianRupee className="w-6 h-6" />
                    {selectedProduct.price}
                  </span>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                  <p className="text-sm text-blue-800">
                    <strong>✓ Customizable</strong> - Add your personal details
                  </p>
                  <p className="text-sm text-blue-800 mt-2">
                    <strong>✓ Fast Delivery</strong> - 24-48 hours
                  </p>
                </div>

                <button
                  onClick={() => handleOrderOnWhatsApp(selectedProduct)}
                  className="w-full flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-all"
                >
                  <Phone className="w-6 h-6" />
                  <span>Order on WhatsApp - ₹{selectedProduct.price}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSection === "about" && (
        <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-gray-50 via-white to-slate-50">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-red-100 px-4 py-2 rounded-full mb-4">
                <Award className="w-5 h-5 text-red-600" />
                <span className="text-red-600 font-semibold">
                  About Shivam Editing Zone
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                OUR{" "}
                <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  STORY
                </span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Professional Graphic Design Services Since 2019
              </p>
            </div>

            {/* Profile Section */}
            <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 md:p-12 shadow-xl mb-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Photo */}

                <div className="relative">
                  <div className="w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black shadow-2xl border-2 border-red-500/30">
                    <img
                      src="/aboutlogo.jpg"
                      alt="Shivam - Founder"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "/logo.png";
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-3 rounded-2xl shadow-xl">
                    <p className="text-sm font-semibold">Since 2019</p>
                    <p className="text-2xl font-bold">
                      {youtubeStats.subscriberCount}+
                    </p>
                  </div>
                </div>

                {/* Info */}
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Shivam !
                    <br />
                    <span className="text-red-600 text-2xl">
                      {" "}
                      Founder & Lead Designer
                    </span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    Trusted by <strong> {youtubeStats.subscriberCount} </strong>
                    clients, I'm Shivam—the creator of Shivam Editing Zone.
                    Since <strong>2019</strong>, I've delivered premium designs
                    for weddings, events, social media, branding, and business
                    promotions. Every design is crafted with creativity, detail,
                    and a clear sense of what makes visuals stand out.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <span className="text-red-600 mr-3 text-xl">✓</span>
                      <span className="text-gray-700">
                        {allProducts.length}+ Professionally Crafted Designs
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-600 mr-3 text-xl">✓</span>
                      <span className="text-gray-700">
                        Affordable Pricing (Starting at ₹150)
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-600 mr-3 text-xl">✓</span>
                      <span className="text-gray-700">
                        Fast Delivery Within 24-48 Hours
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-red-600 mr-3 text-xl">✓</span>
                      <span className="text-gray-700">
                        100% Customizable Design Options
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://www.youtube.com/@Shivameditingzone"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all"
                    >
                      <Youtube className="w-4 h-4" />
                      <span className="text-sm font-semibold">YouTube</span>
                    </a>
                    <a
                      href="https://wa.me/918805817052"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all"
                    >
                      <Phone className="w-4 h-4" />
                      <span className="text-sm font-semibold">WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Section */}
            <div className="mb-12">
              <div className="text-center mb-10">
                <div className="inline-flex items-center space-x-2 bg-yellow-100 px-4 py-2 rounded-full mb-4">
                  <Star className="w-5 h-5 text-yellow-600 fill-yellow-600" />
                  <span className="text-yellow-700 font-semibold">
                    Client Testimonials
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  What Our{" "}
                  <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                    Clients Say
                  </span>
                </h3>
                <p className="text-gray-600 text-lg">
                  Trusted by thousands of satisfied customers
                </p>
                <button
                  onClick={() => setShowFeedbackForm(true)}
                  className="mt-6 inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-bold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg hover:shadow-xl"
                >
                  <Star className="w-5 h-5 fill-white" />
                  <span>Share Your Feedback</span>
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Testimonial 1 */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                    "Shivam's editing is amazing. My thumbnails and reels got
                    much better reach!"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      R
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Rahul</h4>
                      <p className="text-sm text-gray-500">Content Creator</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                    "Fast delivery and very creative designs. Highly recommend!"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      A
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Aditi</h4>
                      <p className="text-sm text-gray-500">Wedding Planner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Thank You Card */}
            <div className="bg-gradient-to-br from-gray-900 via-red-900 to-black rounded-2xl p-8 text-center text-white shadow-xl relative overflow-hidden">
              {/* Add animated background like OUR JOURNEY */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-48 h-48 bg-red-500 rounded-full filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-orange-500 rounded-full filter blur-3xl animate-pulse"></div>
              </div>

              <div className="relative z-10">
                <Heart className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-3">
                  Your support means everything to us !
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  We're grateful for your support. Join our community for free
                  design tutorials, tips, and resources.
                </p>
                <a
                  href="https://www.youtube.com/@Shivameditingzone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-white text-red-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg"
                >
                  <Youtube className="w-5 h-5" />
                  <span>Subscribe Now</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeSection === "contact" && (
        <section className="pt-24 pb-16 px-4 bg-white min-h-screen">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Contact Us
              </h2>
              <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
              <p className="text-gray-600 text-lg">
                Get in touch for orders or inquiries
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">For business inquiries</p>
                      <a
                        href="mailto:sv43849@gmail.com"
                        className="text-sm text-red-600 hover:text-red-700 mt-2 block"
                      >
                        sv43849@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
                      <p className="text-gray-600">Quick response for orders</p>
                      <a
                        href="https://wa.me/918805817052"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-green-600 hover:text-green-700 mt-2 block"
                      >
                        +91 88058 17052
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Location</h3>
                      <p className="text-gray-600">
                        Karad, Maharashtra, India 🇮🇳
                      </p>
                      <p className="text-sm text-gray-500 mt-2">Pin: 415539</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Connect With Us
                </h3>
                <a
                  href="https://www.youtube.com/@Shivameditingzone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 bg-red-50 hover:bg-red-100 p-4 rounded-xl transition-all"
                >
                  <div className="bg-red-600 p-3 rounded-lg">
                    <Youtube className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">YouTube</h4>
                    <p className="text-sm text-gray-600">
                      @Shivameditingzone - 15.9K Subscribers
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/shivam.vishwakarma.3150"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 bg-blue-50 hover:bg-blue-100 p-4 rounded-xl transition-all"
                >
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Facebook className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Facebook</h4>
                    <p className="text-sm text-gray-600">Shivam Vishwakarma</p>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/shivam_art21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 bg-pink-50 hover:bg-pink-100 p-4 rounded-xl transition-all"
                >
                  <div className="bg-pink-600 p-3 rounded-lg">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Instagram</h4>
                    <p className="text-sm text-gray-600">@shivam_art21</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-xl">
              {" "}
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Send us a Message
              </h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  />
                  <input
                    type="tel"
                    placeholder="WhatsApp Number *"
                    value={formData.whatsapp}
                    onChange={(e) =>
                      setFormData({ ...formData, whatsapp: e.target.value })
                    }
                    required
                    className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none"
                />
                <textarea
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 rounded-lg font-bold hover:from-red-700 hover:to-orange-700 transition-all flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Send Message via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </section>
      )}

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/logo.png"
                  alt="Shivam Editing Zone Logo"
                  className="w-10 h-10 object-contain"
                />
                <h3 className="text-xl font-bold">Shivam Editing Zone</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Professional design solutions for all your needs.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                {/* email clickable */}
                <a
                  href="mailto:sv43849@gmail.com"
                  className="block hover:underline"
                >
                  📧 sv43849@gmail.com
                </a>

                {/* phone clickable */}
                <a href="tel:+918805817052" className="block hover:underline">
                  📱 +91 88058 17052
                </a>

                {/* location clickable (Google Maps) */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Karad,+Maharashtra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:underline"
                >
                  📍 Karad, Maharashtra
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("catalog")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Product Catalog
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Popular Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Wedding Cards - लग्न पत्रिका</li>
                <li>3D-Logos</li>
                <li>Birthday Banners</li>
                <li>Business Designs</li>
                <li>{allProducts.length}+ Products</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4 mb-4">
                <a
                  href="https://www.youtube.com/@Shivameditingzone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-red-600 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/shivam.vishwakarma.3150"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/shivam_art21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-pink-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              <a
                href="https://wa.me/918805817052"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-600 text-white px-4 py-2 rounded-lg text-sm text-center hover:bg-green-700 transition-colors"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Developed by{" "}
              <a
                href="mailto:vishwakarmaritu011@gmail.com"
                className="underline"
              >
                Ritu Vishwakarma
              </a>
            </p>

            <p className="text-gray-500 text-sm mt-2">
              Joined: 13 July 2019 | 15.9K Subscribers | 873 Videos | 2.7M+
              Views
            </p>
            <p className="text-gray-500 text-sm mt-1">
              {allProducts.length} Products Available
            </p>
          </div>
        </div>
      </footer>

      {/* YouTube Subscribe Popup - ADD HERE ⬇️ */}

      {showYouTubePopup && (
        <div className="fixed top-20 right-6 z-50 animate-slideInRight">
          <div className="relative bg-white rounded-xl shadow-2xl w-[350px] border border-gray-200">
            <button
              onClick={() => setShowYouTubePopup(false)}
              className="absolute -top-2 -right-2 bg-black text-white rounded-full p-1.5 hover:bg-gray-800 transition-all shadow-lg z-10"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-4 p-4">
              <div className="flex-shrink-0">
                <img
                  src="/popuplogo.png"
                  alt="Logo"
                  className="w-16 h-16 object-contain rounded-lg"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-gray-900 mb-0.5 truncate">
                  Shivam Editing Zone
                </h3>
                <p className="text-gray-500 text-xs mb-3">
                  {youtubeStats.videoCount} VIDEOS
                </p>

                <div className="flex items-center gap-3">
                  <a
                    href="https://www.youtube.com/@Shivameditingzone?sub_confirmation=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 text-white px-4 py-1.5 rounded font-bold text-sm hover:bg-red-700 transition-all flex items-center gap-1.5"
                    onClick={() => setShowYouTubePopup(false)}
                  >
                    <Youtube className="w-4 h-4" />
                    SUBSCRIBE
                  </a>
                  <span className="text-blue-600 font-semibold text-sm whitespace-nowrap">
                    {youtubeStats.subscriberCount}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Feedback Form Popup */}
      {showFeedbackForm && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowFeedbackForm(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Share Your Experience
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Help others by sharing your feedback
                  </p>
                </div>
                <button
                  onClick={() => setShowFeedbackForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={feedbackData.name}
                    onChange={(e) =>
                      setFeedbackData({ ...feedbackData, name: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                {/* Role */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Role/Profession{" "}
                    <span className="text-gray-400">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Business Owner, Designer"
                    value={feedbackData.role}
                    onChange={(e) =>
                      setFeedbackData({ ...feedbackData, role: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                {/* Rating */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Rating <span className="text-red-600">*</span>
                  </label>
                  <div className="flex items-center space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() =>
                          setFeedbackData({ ...feedbackData, rating: star })
                        }
                        className="transition-all hover:scale-110"
                      >
                        <Star
                          className={`w-8 h-8 ${
                            star <= feedbackData.rating
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-gray-300"
                          }`}
                        />
                      </button>
                    ))}
                    <span className="ml-3 text-gray-600 font-semibold">
                      {feedbackData.rating}/5
                    </span>
                  </div>
                </div>

                {/* Feedback */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Feedback <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    placeholder="Share your experience with Shivam Editing Zone..."
                    value={feedbackData.feedback}
                    onChange={(e) =>
                      setFeedbackData({
                        ...feedbackData,
                        feedback: e.target.value,
                      })
                    }
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    WhatsApp Number{" "}
                    <span className="text-gray-400">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={feedbackData.whatsapp}
                    onChange={(e) =>
                      setFeedbackData({
                        ...feedbackData,
                        whatsapp: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                {/* Buttons */}
                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowFeedbackForm(false)}
                    className="flex-1 px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:from-orange-600 hover:to-red-600 transition-all shadow-lg"
                  >
                    Submit Feedback
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      <style>{`
        @keyframes slideInRight {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slideInRight {
          animation: slideInRight 0.5s ease-out;
        }
      `}</style>

      {/* Floating WhatsApp Button */}

      <a
        href="https://wa.me/918805817052"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition-all z-50 animate-bounce hover:animate-none group"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Chat with us!
        </span>
      </a>
    </div>
  );
};

export default App;
