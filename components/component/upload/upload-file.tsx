import "@/components/component/upload/upload-file";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React, { useState, useCallback, useRef } from "react";
import Image from "next/image";

interface FileData {
  file: File;
  preview: string;
}

export default function UploadFile(props: any) {
  const [highlight, setHighlight] = useState<boolean>(false);
  const [files, setFiles] = useState<FileData[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setHighlight(true);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setHighlight(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setHighlight(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setHighlight(false);

    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filesArr = Array.from(e.target.files || []);

    handleFiles(filesArr);
  };

  const handleFiles = (filesArr: File[]) => {
    const newFiles = filesArr.map((file) => {
      const preview = URL.createObjectURL(file);
      return { file, preview };
    });

    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    const formData = props.fields.value || new FormData();
    const data = [...files, ...newFiles];
    const FileData = data.map((item) => item.file);
    // console.log(FileData)
    // [...files, ...newFiles]
    // console.log(formData,typeof formData)
    // formData.append('files', FileData)
    props.fields.onChange({
      target: {
        name: "image", // assuming the field name is 'image'
        value: [...FileData],
      },
    });
  };

  const handleView = (preview: string) => {
    window.open(preview, "_blank");
  };

  const handleDelete = (fileToDelete: File) => {
    setFiles((prevFiles) =>
      prevFiles.filter(({ file }) => file !== fileToDelete)
    );
    const FileData = files
      .filter(({ file }) => file !== fileToDelete)
      .map((item) => item.file);

    props.fields.onChange({
      target: {
        name: "image", // assuming the field name is 'image'
        value: FileData,
      },
    });
  };

  const handleSelectFiles = () => {
    inputRef.current?.click();
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Upload Files</CardTitle>
        <CardDescription>
          Drag and drop files or click to select from your device.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div
          className={`group relative flex h-48 w-full cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-primary transition-colors hover:border-primary-foreground ${highlight ? "border-primary-foreground" : ""}`}
          onDragEnter={(e) => {
            if (!props.disabled) {
              return handleDragEnter(e);
            }
          }}
          onDragOver={(e) => {
            if (!props.disabled) {
              return handleDragOver(e);
            }
          }}
          onDragLeave={(e) => {
            if (!props.disabled) {
              return handleDragLeave(e);
            }
          }}
          onDrop={(e) => {
            if (!props.disabled) {
              return handleDrop(e);
            }
          }}
        >
          <div className="z-10 text-center">
            <CloudUploadIcon className="mx-auto h-8 w-8 text-primary" />
            <p className="mt-2 text-sm font-medium text-muted-foreground">
              Drag and drop files here
            </p>
            {/* <p className="mt-1 text-xs text-muted-foreground">Supported file types: .jpg, .png, .pdf, .doc, .docx</p> */}
          </div>
          <input
            ref={inputRef}
            placeholder="upload-file"
            type="file"
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
            {...props}
            multiple
            disabled={props.disabled}
            onChange={handleFileChange}
          />
        </div>
        <div className="mt-4 grid gap-4">
          {files.map(({ file, preview }, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-md border p-2"
            >
              <div className="flex items-center gap-2">
                <FileIcon className="h-6 w-6 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">{file.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {(file.size / 1024).toFixed(2)} KB
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  type="button"
                  onClick={() => handleView(preview)}
                >
                  <EyeIcon className="h-4 w-4" />
                  <span className="sr-only">Preview</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  type="button"
                  disabled={props.disabled}
                  onClick={() => handleDelete(file)}
                >
                  <TrashIcon className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button
          variant="secondary"
          type="button"
          disabled={props.disabled}
          onClick={() => handleSelectFiles()}
        >
          Select Files
        </Button>
      </CardFooter>
    </Card>
  );
}

function CloudUploadIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M12 12v9" />
      <path d="m16 16-4-4-4 4" />
    </svg>
  );
}

function EyeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function FileIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  );
}

function TrashIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
