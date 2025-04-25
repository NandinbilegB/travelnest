'use client'

import { SearchIcon, UserIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Separator } from "../components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export default function Home() {
  const navLinks = [
    { text: "Home", href: "#" },
    { text: "Trips", href: "#" },
    { text: "Destinations", href: "#" },
    { text: "Companies", href: "#" },
    { text: "Plan\nyour trips", href: "#" },
  ];

  const footerCategories = [
    {
      title: "Top companies",
      links: [
        { text: "Company 1", href: "#" },
        { text: "Company 2", href: "#" },
        { text: "Company 3", href: "#" },
      ],
    },
    {
      title: "Top trips",
      links: [
        { text: "Trip 1", href: "#" },
        { text: "Trip 2", href: "#" },
        { text: "Trip 3", href: "#" },
      ],
    },
    {
      title: "Top attractions",
      links: [
        { text: "Attraction 1", href: "#" },
        { text: "Attraction 2", href: "#" },
        { text: "Attraction 3", href: "#" },
      ],
    },
    {
      title: "See reviews",
      links: [
        { text: "Review", href: "#" },
        { text: "FQ", href: "#" },
      ],
    },
    {
      title: "Experience",
      links: [
        { text: "Mongolian 1", href: "#" },
        { text: "Mongolian 2", href: "#" },
        { text: "Mongolian 3", href: "#" },
      ],
    },
  ];

  const socialIcons = [
    { src: "/instagram.png", alt: "Instagram" },
    { src: "/facebook.png", alt: "Facebook" },
    { src: "/linkedin-circled.png", alt: "Linkedin circled" },
    { src: "/youtube.png", alt: "You tube" },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1523px] relative">
        {/* Header/Navigation */}
        <header className="w-full h-[111px] bg-[#0a1e3e] border border-solid border-black flex items-center px-4">
          <div className="flex items-center justify-between w-full">
            <img
              className="w-[102px] h-[91px] object-cover"
              alt="TravelNest Logo"
              src="/image-12.png"
            />

            <nav className="flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <>
                  {index > 0 && (
                    <img
                      className="w-px h-[42px] object-cover"
                      alt="Separator"
                      src="/line-44.svg"
                    />
                  )}
                  <a
                    key={index}
                    href={link.href}
                    className="[font-family:'Albert_Sans',Helvetica] font-normal text-white text-2xl text-center whitespace-pre-line"
                  >
                    {link.text}
                  </a>
                </>
              ))}
            </nav>

            <div className="flex items-center space-x-2">
              <SearchIcon className="w-[53px] h-[49px] text-white" />
              <UserIcon className="w-[90px] h-[70px] text-white" />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex justify-center py-16">
          <Card className="w-[1133px] rounded-[20px] shadow-none border-none">
            <CardContent className="p-16">
              <Tabs defaultValue="traveler" className="w-full">
                
              <TabsList className="w-full max-w-[596px] h-[83px] mx-auto bg-[#163966] rounded-[20px] p-1 flex">
                  <TabsTrigger
                    value="company"
                    className="flex-1 h-full rounded-[20px] [font-family:'Albert_Sans',Helvetica] text-white text-3xl data-[state=active]:bg-white data-[state=active]:text-[#163966] transition"
                  >
                    Компани
                  </TabsTrigger>
                  <TabsTrigger
                    value="traveler"
                    className="flex-1 h-full rounded-[20px] [font-family:'Albert_Sans',Helvetica] text-white text-3xl data-[state=active]:bg-white data-[state=active]:text-[#163966] transition"
                  >
                    Аялагч
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="traveler" className="mt-16">
                  <div className="flex flex-col items-center">
                    <h2 className="[font-family:'Albert_Sans',Helvetica] text-black text-3xl mb-10">
                      Нэвтрэх
                    </h2>

                    {/* Login Buttons */}
                    <Button
                      variant="outline"
                      className="w-[573px] h-[71px] mb-5 rounded-[20px] border border-solid border-black flex items-center justify-center gap-4"
                    >
                      <img
                        className="w-[30px] h-[30px] object-cover"
                        alt="Facebook logo"
                        src="/image-11.png"
                      />
                      <span className="[font-family:'Albert_Sans',Helvetica] font-normal text-black text-[22px]">
                        Facebook эрхээр нэвтрэх
                      </span>
                    </Button>

                    <Button
                      variant="outline"
                      className="w-[573px] h-[71px] mb-10 rounded-[20px] border border-solid border-black flex items-center justify-center gap-4"
                    >
                      <img
                        className="w-[30px] h-[30px] object-cover"
                        alt="Google logo"
                        src="/image-12-1.png"
                      />
                      <span className="[font-family:'Albert_Sans',Helvetica] font-normal text-black text-[22px]">
                        Google эрхээр нэвтрэх
                      </span>
                    </Button>

                    <Separator className="w-[569px] mb-5" />

                    {/* Registration Form */}
                    <div className="w-full max-w-[573px]">
                      <div className="grid grid-cols-2 gap-4 mb-5">
                        <div>
                          <label className="[font-family:'Albert_Sans',Helvetica] text-[#666666c4] text-xl mb-2 block">
                            Овог
                          </label>
                          <Input
                            placeholder="Овгоо оруулна уу."
                            className="h-[60px] rounded-[20px] border border-solid border-black [font-family:'Albert_Sans',Helvetica] text-[#00000080] text-xs"
                          />
                        </div>
                        <div>
                          <label className="[font-family:'Albert_Sans',Helvetica] text-[#666666c4] text-xl mb-2 block">
                            Нэр
                          </label>
                          <Input
                            placeholder="Нэрээ оруулна уу."
                            className="h-[60px] rounded-[20px] border border-solid border-black [font-family:'Albert_Sans',Helvetica] text-[#00000080] text-xs"
                          />
                        </div>
                      </div>

                      <div className="mb-5">
                        <label className="[font-family:'Albert_Sans',Helvetica] text-[#666666c4] text-xl mb-2 block">
                          И-мэйл
                        </label>
                        <Input
                          placeholder="И-мэйл хаягаа оруулна уу."
                          className="h-[60px] rounded-[20px] border border-solid border-black [font-family:'Albert_Sans',Helvetica] text-[#00000080] text-xs"
                        />
                      </div>

                      <Button className="w-full h-[55px] bg-[#163966] rounded-[20px] [font-family:'Albert_Sans',Helvetica] text-white text-xl">
                        Бүртгүүлэх
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="company">
                  {/* Company tab content would go here */}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </main>

        <Separator className="w-full" />

        {/* Footer */}
        <footer className="w-full">
          <div className="w-full bg-[url(/rectangle-120.svg)] bg-[100%_100%] py-16 px-8">
            <div className="max-w-[1512px] mx-auto">
              <div className="flex items-center mb-8">
                <h3 className="[font-family:'Albert_Sans',Helvetica] font-normal text-white text-4xl mr-8">
                  Follow us on
                </h3>
                <div className="flex space-x-2">
                  {socialIcons.map((icon, index) => (
                    <a href="#" key={index}>
                      <img
                        className="w-[90px] h-[90px]"
                        alt={icon.alt}
                        src={icon.src}
                      />
                    </a>
                  ))}
                </div>
              </div>

              <Separator className="bg-white mb-8" />

              <div className="grid grid-cols-5 gap-8">
                {footerCategories.map((category, index) => (
                  <div key={index}>
                    <h4 className="[font-family:'Albert_Sans',Helvetica] font-normal text-white text-2xl mb-4">
                      {category.title}
                    </h4>
                    <ul className="space-y-3">
                      {category.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            href={link.href}
                            className="[font-family:'Albert_Sans',Helvetica] font-normal text-white text-2xl underline"
                          >
                            {link.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full h-[92px] bg-[#0a1e3e] flex items-center justify-center">
            <p className="[font-family:'Albert_Sans',Helvetica] font-normal text-white text-2xl">
              2025 © TravelNest LLC
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}