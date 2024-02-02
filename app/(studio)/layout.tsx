import { Metadata } from "next";

export const metadata: Metadata = {
	title: "STUDIO - William Portfolio",
	description: "Sanity Studio for William's Portfolio",
};

export default function StudioLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section>{children}</section>;
}
