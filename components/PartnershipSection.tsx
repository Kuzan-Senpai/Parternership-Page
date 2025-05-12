// components/PartnershipSection.tsx
import Image from 'next/image';

export default function PartnershipSection() {
    return (
        <section className="px-6 md:px-20 py-16 space-y-16 bg-[#FFFFFF] font-poppins">
        {/* Types of Partnership */}
            <div className="text-center">
                <h2 className="text-3xl font-medium mb-14 text-[#2C322A]">Types of Partnership</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto px-4">
                    
                    {/* Project Partnerships */}
                    <div className="flex flex-col items-center text-center gap-4 w-full">
                        <Image
                            src="/partner 1.png"
                            alt="Project Partnerships"
                            width={320}
                            height={240}
                            className="rounded-lg"
                        />
                        <h3 className="text-2xl font-medium text-black">Project Partnerships</h3>
                        <p className="text-sm text-[#454652] max-w-lg">
                            Collaborations focused on specific projects or initiatives, leveraging resources,
                            expertise, and networks to achieve common goals.
                        </p>
                    </div>

                    {/* Organizational Partnerships */}
                    <div className="flex flex-col items-center text-center gap-4 w-full">
                        <Image
                            src="/partner 2.png"
                            alt="Organizational Partnerships"
                            width={320}
                            height={240}
                            className="rounded-lg"
                        />
                        <h3 className="text-2xl font-medium text-black">Organizational Partnerships</h3>
                        <p className="text-sm text-[#454652] max-w-lg">
                            Long-term alliances with organizations that share our vision and mission, aimed at
                            driving systemic change and creating lasting impact.
                        </p>
                    </div>
                    
                </div>
            </div>

            {/* Our Partnership Approach */}
            <div className="text-center">
                <h2 className="text-3xl md:text-3xl font-medium mb-12 text-[#2C322A]">Our Partnership Approach</h2>
                <div className="space-y-12">
                    {/* Card 1 */}
                    <div className="flex flex-col md:flex-row items-center gap-8 text-left">
                        <Image
                            src="/approach1.png"
                            alt="Collaborative Engagement"
                            width={320}
                            height={240}
                            className="rounded-lg"
                        />
                        <div>
                            <h3 className="text-2xl font-medium text-[#000000] mb-2">Collaborative Engagement</h3>
                            <p className="text-sm text-[#454652] max-w-lg">
                            We work closely with our partners to co-create solutions, ensuring that our
                            initiatives are relevant, impactful, and sustainable.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 (reversed) */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-8 text-left">
                        <Image
                            src="/approach2.png"
                            alt="Mutual Benefit"
                            width={320}
                            height={240}
                            className="rounded-lg"
                        />
                        <div>
                            <h3 className="text-2xl font-medium text-[#000000] mb-2">Mutual Benefit</h3>
                            <p className="text-sm text-[#454652] max-w-lg">
                            Our partnerships are built on a foundation of mutual benefit, where both SCEF and
                            our partners gain value through shared resources, knowledge, and opportunities.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 (spanning full width on mobile) */}
                    <div className="flex flex-col md:flex-row items-center gap-8 text-left">
                        <Image
                            src="/approach3.png"
                            alt="Transparency and Accountability"
                            width={320}
                            height={240}
                            className="rounded-lg"
                        />
                        <div>
                            <h3 className="text-2xl font-medium text-[#000000] mb-2">Transparency and Accountability</h3>
                            <p className="text-sm text-[#454652] max-w-lg">
                            We prioritize transparency and accountability in all our partnerships, ensuring that
                            our collaborative efforts are efficient, ethical, and results-driven.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Partnership Opportunities */}
            <div className="text-center mt-20">
                <h2 className="text-3xl font-medium mb-14 text-[#2C322A]">Partnership Opportunities</h2>

                <div className="flex flex-col gap-10 items-center">

                {/* Card 1 - Educational Initiatives */}
                <div className="bg-[#EEEFFF] rounded-lg p-4 md:p-6 w-full max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-6 shadow-md">
                    <div className="flex-shrink-0">
                        <Image
                        src="/partner 1.png"
                        alt="Educational Initiatives"
                        width={320}
                        height={240}
                        className="rounded-md"
                        />
                    </div>
                    <div className="text-left">
                        <h3 className="text-2xl font-medium text-[#000000] mb-2">Educational Initiatives</h3>
                        <p className="text-sm text-[#000000] leading-relaxed">
                        Partner with us on projects like Education Online Nigeria (EdON), e-Library Nigeria, and
                        New Education Standard Award (AfricaNESA Africa) to enhance access to quality education
                        and promote educational excellence.
                        </p>
                    </div>
                </div>

                {/* Card 2 - Health and Wellness */}
                <div className="bg-[#EEEFFF] rounded-lg p-4 md:p-6 w-full max-w-3xl mx-auto flex flex-col md:flex-row-reverse items-center gap-6 shadow-md">
                    <div className="flex-shrink-0">
                        <Image
                        src="/opp2.png"
                        alt="Health and Wellness Programs"
                        width={320}
                        height={240}
                        className="rounded-md"
                        />
                    </div>
                    <div className="text-left">
                        <h3 className="text-2xl font-medium text-[#000000] mb-2">Health and Wellness Programs</h3>
                        <p className="text-sm text-[#000000] leading-relaxed">
                        Collaborate on health advocacy initiatives, focusing on women and girls’ health,
                        HIV/AIDS awareness, and general health education to improve community wellbeing.
                        </p>
                    </div>
                </div>

                {/* Card 3 - Environmental Conservation */}
                <div className="bg-[#EEEFFF] rounded-lg p-4 md:p-6 w-full max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-6 shadow-md">
                    <div className="flex-shrink-0">
                        <Image
                        src="/opp3.png"
                        alt="Environmental Conservation"
                        width={320}
                        height={240}
                        className="rounded-md"
                        />
                    </div>
                    <div className="text-left">
                        <h3 className="text-2xl font-medium text-[#000000] mb-2">Environmental Conservation</h3>
                        <p className="text-sm text-[#000000] leading-relaxed">
                        Join forces with us to drive climate change awareness, youth-led environment initiatives,
                        and water and sanitation projects that promote environmental sustainability.
                        </p>
                    </div>
                </div>

                {/* Card 4 - Gender Equality */}
                <div className="bg-[#EEEFFF] rounded-lg p-4 md:p-6 w-full max-w-3xl mx-auto flex flex-col md:flex-row-reverse items-center gap-6 shadow-md">
                    <div className="flex-shrink-0">
                        <Image
                        src="/opp4.png"
                        alt="Gender Equality and Empowerment"
                        width={320}
                        height={240}
                        className="rounded-md"
                        />
                    </div>
                    <div className="text-left">
                        <h3 className="text-2xl font-medium text-[#000000] mb-2">Gender Equality and Empowerment</h3>
                        <p className="text-sm text-[#000000] leading-relaxed">
                        Work with us to empower women and girls through educational programs, leadership trainings,
                        and economic empowerment initiatives.
                        </p>
                    </div>
                </div>
                </div>
            </div>

            {/* Benefits of Partnering with SCEF */}
            <div className="text-center mt-25">
    <h2 className="text-3xl font-medium mb-10 text-[#2C322A] text-left">Benefits of Partnering with SCEF</h2>
    
    <div className="flex flex-col lg:flex-row gap-10 items-center justify-center max-w-6xl mx-auto px-4">
        {/* Left: Text content */}
        <div className="flex-1 space-y-6 text-left">
            <div>
                <h3 className="text-2xl font-medium text-[#000000]">1. Increased Visibility and Brand Recognition</h3>
                <p className="text-sm text-[#454652]">
                    Gain exposure through our extensive network and media coverage, showcasing your commitment to local impact and corporate social responsibility (CSR).
                </p>
            </div>
            <div>
                <h3 className="text-2xl font-medium text-[#000000]">2. Access to Diverse Networks</h3>
                <p className="text-sm text-[#454652]">
                    Connect with a wide range of stakeholders, including educators, policymakers, community leaders, and other organizations, enhancing your network and collaboration opportunities.
                </p>
            </div>
            <div>
                <h3 className="text-2xl font-medium text-[#000000]">3. Impactful Collaboration</h3>
                <p className="text-sm text-[#454652]">
                    Make a tangible difference by contributing to initiatives that drive educational excellence, community empowerment, and sustainable development.
                </p>
            </div>
            <div>
                <h3 className="text-2xl font-medium text-[#000000]">4. Capacity Building</h3>
                <p className="text-sm text-[#454652]">
                    Benefit from our expertise in advocacy, project management, and capacity building, enhancing your organization’s capabilities and impact.
                </p>
            </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex justify-center">
            <Image
                src="/benefit.png" // Replace with your actual image path
                alt="Benefits Illustration"
                width={508}
                height={513}
                className="rounded-md"
            />
        </div>
    </div>
            </div>

            {/* Enhanced Benefits Section */}
<div className="text-center mt-30">

    <div className="flex flex-col lg:flex-row gap-10 items-start justify-center max-w-6xl mx-auto px-4">
        {/* Left: Stacked Images */}
        <div className="flex flex-col gap-4 flex-1">
            <Image
                src="/benefit2.png"
                alt="Child Learning"
                width={500}
                height={350}
                className="rounded-lg"
            />
            <Image
                src="/benefit3.png"
                alt="Group Collaboration"
                width={513}
                height={200}
                className="rounded-lg"
            />
        </div>

        {/* Right: Text benefits */}
        <div className="flex-1 space-y-6 text-left">
            <h2 className="text-3xl font-medium mb-6 text-[#2C322A] ">Benefits of Partnering with SCEF</h2>
            <p className="text-sm text-[#454652] max-w-3xl mx-auto mb-12">
                At Santos Creations Educational Foundation (SCEF), we believe in the power of partnerships to drive meaningful change and achieve sustainable development goals. Our partnership marketing capabilities are designed to create win-win collaborations that amplify impact, enhance brand visibility, and deliver measurable results.
            </p>
        <div>
                <h3 className="text-2xl font-medium text-[#000000]">1. Strategic Alignment</h3>
                <p className="text-sm text-[#454652]">
                    We align our partnerships with organizations that share our mission of providing quality education and empowering communities. Together, we create strategic campaigns that address critical societal challenges and promote sustainable development.
                </p>
            </div>
            <div>
                <h3 className="text-2xl font-medium text-[#000000]">2. Comprehensive Marketing Support</h3>
                <p className="text-sm text-[#454652]">
                    Our marketing team works closely with partners to develop tailored marketing programs that highlight our collective efforts. From co-branded materials to press engagements and social media promotions, we ensure maximum visibility and impact.
                </p>
            </div>
            <div>
                <h3 className="text-2xl font-medium text-[#000000]">3. Impact Measurement</h3>
                <p className="text-sm text-[#454652]">
                    We prioritize transparency and accountability, providing detailed reports and performance assessments to show the effectiveness of our collaborative efforts. Our partners can see the tangible results of their contributions and the positive changes we achieve together.
                </p>
            </div>
            <div>
                <h3 className="text-2xl font-medium text-[#000000]">4. Innovative Campaigns</h3>
                <p className="text-sm text-[#454652]">
                    We develop innovative marketing strategies to reach diverse audiences and drive engagement. Whether it’s through digital marketing, community events, or awareness campaigns, we build narratives that resonate with our target audience and inspire action.
                </p>
            </div>
        </div>
    </div>
</div>


        </section>
    );
}
