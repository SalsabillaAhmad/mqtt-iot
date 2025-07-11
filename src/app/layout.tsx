import './globals.css';
import { Metadata } from "next";
import NavbarUtama from '@/component/navbarUtama/page';


export const metadata: Metadata = {
    title: 'MQTT-IOT',
    description: 'Dasboard login/register',
}

export default function RootLayout({
    children,
}:{
    children: React.ReactNode
}){
    return (
        <html lang="en">
           
            <body>
              <NavbarUtama/>

                <main className=' min-h-screen  p-6  bg-gray-50'>
                    {children}</main>
                <footer className='bg-white text-center text-sm '>
                    &copy;{new Date().getFullYear()} mqtt-iot. All Right reserved.
                </footer>
               
            </body>
        </html>
    );
}