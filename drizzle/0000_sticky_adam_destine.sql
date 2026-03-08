CREATE TABLE "shortened_links" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "shortened_links_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"user_id" text NOT NULL,
	"original_url" text NOT NULL,
	"short_code" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX "short_code_unique" ON "shortened_links" USING btree ("short_code");--> statement-breakpoint
CREATE INDEX "user_id_index" ON "shortened_links" USING btree ("user_id");