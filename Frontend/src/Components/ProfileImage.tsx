import React, { useState } from "react";
import Avatar from "react-avatar-edit";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import img from "./img.png";

interface ProfileItem {
    pview: string;
}

const ProfileImage: React.FC = () => {
    const [imageCrop, setImageCrop] = useState<boolean>(false);
    const [image, setImage] = useState<File | null>(null);
    const [src, setSrc] = useState<string | null>(null);
    const [profile, setProfile] = useState<ProfileItem[]>([]);
    const [pview, setPview] = useState<string | null>(null);

    const profileFinal = profile.map((item) => item.pview);

    const onClose = () => {
        setPview(null);
    };

    const onCrop = (view: string) => {
        setPview(view);
    };

    const saveCropImage = () => {
        if (pview) {
            setProfile([...profile, { pview }]);
        }
        setImageCrop(false);
    };

    return (
        <div>
            <div className="profile_img text-center p-4">
                <div className="flex flex-column justify-content-center align-items-center">
                    <img
                        style={{
                            width: "200px",
                            height: "200px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            border: "40px solid green",
                        }}
                        onClick={() => setImageCrop(true)}
                        src={profileFinal.length ? profileFinal[0] : img}
                        alt=""
                    />
                    <label htmlFor="" className="mt-3 font-semibold text-5xl">
                        Ankit Soni
                    </label>

                    <Dialog
                        visible={imageCrop}
                        header={() => (
                            <p className="text-2xl font-semibold textColor">Update Profile</p>
                        )}
                        onHide={() => setImageCrop(false)}
                    >
                        <div className="confirmation-content flex flex-column align-items-center">
                            <Avatar
                                width={500}
                                height={400}
                                onCrop={onCrop}
                                onClose={onClose}
                                // src={src}
                                shadingColor={"#474649"}
                                backgroundColor={"#474649"}
                            />
                            <div className="flex flex-column align-items-center mt-5 w-12">
                                <div className="flex justify-content-around w-12 mt-4">
                                    <Button
                                        onClick={saveCropImage}
                                        label="Save"
                                        icon="pi pi-check"
                                    />
                                </div>
                            </div>
                        </div>
                    </Dialog>
                    <InputText
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={(event) => {
                            const file = event.target.files?.[0];
                            if (file && file.type.substring(0, 5) === "image") {
                                setImage(file);
                            } else {
                                setImage(null);
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProfileImage;
