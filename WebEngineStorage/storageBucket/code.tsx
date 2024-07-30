// Function to convert file to Blob
"use client";

export function fileToBlob(file: File): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(new Blob([reader.result as ArrayBuffer]));
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}

interface SaveResponse {
  message: string;
  status: boolean;
}

// Function to save image to storage bucket
export async function saveImage(
  bucketName: string,
  imageName: string,
  element: HTMLInputElement
): Promise<SaveResponse> {
  const fileInput = element;
  if (fileInput.files && fileInput.files.length === 0) {
    return {
      message: "No file selected.",
      status: false,
    };
  }

  const file = fileInput.files![0];
  const blob = await fileToBlob(file);

  if ("storageFoundation" in navigator) {
    const storageFoundation = (navigator as any).storageFoundation; // TypeScript workaround
    const bucket = await storageFoundation.open(bucketName);
    await bucket.put(imageName.toLowerCase(), blob);

    return {
      message: "Image saved successfully.",
      status: true,
    };
  } else {
    return {
      message: "Storage Foundation API is not supported.",
      status: false,
    };
  }
}

// Function to load image from storage bucket
export async function loadImage(
  bucketName: string,
  imageName: string
): Promise<SaveResponse> {
  if ("storageFoundation" in navigator) {
    const storageFoundation = (navigator as any).storageFoundation; // TypeScript workaround
    const bucket = await storageFoundation.open(bucketName);
    const blob = await bucket.get(imageName.toLowerCase());

    if (blob) {
      const url = URL.createObjectURL(blob);
      return {
        message: url,
        status: true,
      };
    } else {
      return {
        message: "Image not found.",
        status: false,
      };
    }
  } else {
    return {
      message: "Storage Foundation API is not supported.",
      status: false,
    };
  }
}

export async function urlToImageBlob(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const blob = await response.blob();
    return blob;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

export async function SaveImageWithBlob(
  bucketName: string,
  imageName: string,
  blob: Blob
): Promise<SaveResponse> {
  if ("storageFoundation" in navigator) {
    const storageFoundation = (navigator as any).storageFoundation; // TypeScript workaround
    const bucket = await storageFoundation.open(bucketName);
    await bucket.put(imageName, blob);
    // console.log(blob)
    return {
      message: "Image saved successfully.",
      status: true,
    };
  } else {
    return {
      message: "Storage Foundation API is not supported.",
      status: false,
    };
  }
}
