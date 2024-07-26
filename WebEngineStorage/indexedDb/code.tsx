"use client"
import { useEffect, useRef } from 'react';
import { openDB ,IDBPDatabase} from 'idb';

const useIndexedDB = (dbName:string, storeName:string) => {
    const dbRef = useRef<IDBPDatabase | null >(null);

  useEffect(() => {
    const initDB = async () => {
      dbRef.current = await openDB(dbName, 1, {
        upgrade(db) {
          db.createObjectStore(storeName);
        },
      });
    };

    initDB();
  }, [dbName, storeName]);

  const getData = async (key:string | number) => {
    if (dbRef.current){
        return await dbRef.current.get(storeName, key);
    }
  };

  const setData = async (key:string | number, value:any) => {
    if (dbRef.current) {
        await dbRef.current.put(storeName, value, key);
    }
  };

  const deleteData = async (key:string | number) => {
    if (dbRef.current) {
        await dbRef.current.delete(storeName, key);
    }
  };

  return { getData, setData, deleteData };
};

export default useIndexedDB;
