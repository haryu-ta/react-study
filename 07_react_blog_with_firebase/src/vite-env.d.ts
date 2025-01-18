/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_FIREBASE_APIKEY: string;
    readonly VITE_FIREBASE_AUTHORDOMAIN: string;
    readonly VITE_FIREBASE_PROJECTID:string;
    readonly VITE_FIREBASE_STORAGEBUCKET:string;
    readonly VITE_FIREBASE_MESSENGINGSENDERID:string;
    readonly VITE_FIREBASE_APPID:string;
}