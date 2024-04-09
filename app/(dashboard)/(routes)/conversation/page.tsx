"use client";

import axios from "axios";
import { Heading } from "@/components/heading";
import { MessageSquare } from "lucide-react";
import {useRouter} from "next/navigation";
import { useForm } from "react-hook-form";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions";
import { useState } from "react";

import * as z from "zod";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ConversationPage = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try{
      const userMessage: ChatCompletionMessageParam = {
        role: "user",
        content: data.prompt,
      };
      const newMessage = [...messages, userMessage];
      const response = await axios.post("/api/conversation", {
        messages: newMessage,
      });
      setMessages((current)=>[...current, userMessage, response.data])
      form.reset();
    }catch(error: any){
      console.log(data);
    }finally{
      router.refresh();
    }
  };

  return (
    <>
      <div>
        <Heading
          title="Conversation"
          description="Conversation with AI"
          icon={MessageSquare}
          iconColor="text-yellow-500"
          bgColor="bg-yellow-500/10"
        />
        <div className="px-4 lg:px-8">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="sm:col-span-12 md:col-span-8 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0
                                   outline-none
                                   focus-visible:ring-0
                                   focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Is France a beautiful country?"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 md:col-span-4 lg:col-span-2 w-full"
                disabled={isLoading}
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="mx-10 space-y-10 mt-10">
          <div className="flex flex-col-reverse gap-y-4">
          {messages.map((message, index) => (
            <div key={index}>
              {Array.isArray(message.content)
                ? message.content.map((part, partIndex) => {
                    if ("text" in part) {
                      return <span key={partIndex}>{part.text}</span>;
                    } else {
                      return null;
                    }
                  })
                : message.content}
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ConversationPage;
