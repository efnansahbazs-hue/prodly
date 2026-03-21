import { useState, useCallback } from "react";

const AVATAR_KEY = "prodly_avatar";
const PHOTO_KEY = "prodly_photo";

export const useAvatar = () => {
  const [avatarId, setAvatarIdState] = useState<string | null>(() =>
    localStorage.getItem(AVATAR_KEY)
  );
  const [photo, setPhotoState] = useState<string | null>(() =>
    localStorage.getItem(PHOTO_KEY)
  );

  const setAvatarId = useCallback((id: string | null) => {
    if (id) {
      localStorage.setItem(AVATAR_KEY, id);
      localStorage.removeItem(PHOTO_KEY);
      setPhotoState(null);
    } else {
      localStorage.removeItem(AVATAR_KEY);
    }
    setAvatarIdState(id);
  }, []);

  const setPhoto = useCallback((base64: string | null) => {
    if (base64) {
      localStorage.setItem(PHOTO_KEY, base64);
      localStorage.removeItem(AVATAR_KEY);
      setAvatarIdState(null);
    } else {
      localStorage.removeItem(PHOTO_KEY);
    }
    setPhotoState(base64);
  }, []);

  const hasAvatar = !!(avatarId || photo);

  return { avatarId, photo, setAvatarId, setPhoto, hasAvatar };
};
