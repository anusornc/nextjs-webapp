"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreatePrompt = () => {
    const router = useRouter();


    const [submitting, setIsSubmitting] = useState(false);
    const [post, setPost] = useState({ prompt: "", tag: "", creator: "" });

    const createPrompt = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/prompt/new", {
                method: "POST",
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag,
                    creator: post.creator,
                }),
            });

            if (response.ok) {
                router.push("/");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Form
            type='สร้าง'
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={createPrompt}
        />
    );
};

export default CreatePrompt;