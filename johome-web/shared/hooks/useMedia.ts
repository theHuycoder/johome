import { useMutation } from "@apollo/client";
import { UPLOAD_FILE_MUTATION } from "@/shared/queries/media.queries";

export default function useMedia() {
 const [uploadFiles, { loading, error }] = useMutation(UPLOAD_FILE_MUTATION);
 return uploadFiles;
}
