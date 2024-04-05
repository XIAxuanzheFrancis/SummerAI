"use client";
import { Heading } from "@/components/heading";
import { MessageSquare } from "lucide-react";

import { useForm } from "react-hook-form";

import * as z from "zod";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem} from "@/components/ui/form";

const ConversationPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
      console.log(data);
  }

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
                    <form onSubmit={form.handleSubmit(onSubmit)}
                        className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
                    >
                        <FormField name="prompt" render={({field})=>(
                            <FormItem className="col-span-12">
                                <FormControl className="m-0 p-0">

                                </FormControl>
                            </FormItem>
                        )}
                        />
                    </form>
                </Form>
        </div>
        </div>
    </>

  );
};

export default ConversationPage;
