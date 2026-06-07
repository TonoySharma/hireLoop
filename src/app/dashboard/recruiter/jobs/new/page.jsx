"use client";

import React, { useState } from "react";
import {
    Form,
    Fieldset,
    TextField,
    Label,
    Input,
    TextArea,
    FieldError,
    Select,
    ListBox,
    Switch,
    Button,

} from "@heroui/react";
import { Briefcase, Globe } from "@gravity-ui/icons";
import FadeUp from "@/components/FadeUp";
import { createJob } from "@/lib/actions/jobs";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

export default function PostJobPage() {
    // Mock configuration for recruiter's authenticated state
    const [mockCompany] = useState({
        name: "Acme Corp (Auto-filled)",
        id: "company_123",
        isApproved: true,
    });

    const [isRemote, setIsRemote] = useState(false);
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!mockCompany.isApproved) {
            alert("Your company profile must be approved before you can post jobs.");
            return;
        }

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const newErrors = {};
        if (!data.jobTitle) newErrors.jobTitle = "Job title is required";
        if (!data.jobCategory) newErrors.jobCategory = "Job category is required";
        if (!data.jobType) newErrors.jobType = "Job type is required";
        if (!data.minSalary) newErrors.minSalary = "Minimum salary is required";
        if (!data.maxSalary) newErrors.maxSalary = "Maximum salary is required";
        if (!isRemote && !data.location) newErrors.location = "Location is required for non-remote roles";
        if (!data.deadline) newErrors.deadline = "Application deadline is required";
        if (!data.responsibilities) newErrors.responsibilities = "Responsibilities are required";
        if (!data.requirements) newErrors.requirements = "Requirements are required";

        console.log("Validation errors:", newErrors);

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});

        const payload = {
            ...data,
            isRemote,
            companyId: mockCompany.id,
            status: "active",
            isPubliclyVisible: true,
        };

        console.log("Submitting job with payload:", payload);

        const res = await createJob(payload);
        if (res.insertedId) {
            toast.success("Job posted successfully!");
            e.target.reset();
            setIsRemote(false);
            redirect("/dashboard/recruiter/jobs");
        }
    };

    // Dark styles styled to match your image_988c20.png reference layout
    const textInputClass =
        "w-full text-black border border-zinc-200  focus:border-zinc-600 rounded h-12 px-3 text-sm placeholder:text-black outline-none transition-all";
    const textAreaClass =
        "w-full text-black border border-zinc-200  focus:border-zinc-600 rounded p-3 text-sm placeholder:text-black outline-none transition-all";
    const selectBoxClass = "w-full";
    const triggerClasses =
        "w-full flex items-center justify-between  border border-zinc-200  h-12 rounded px-3 text-black transition-all text-sm outline-none";
    const popoverClasses = " border border-zinc-200 text-black rounded shadow-xl p-1";
    const listItemClasses = "flex items-center justify-between p-2 rounded-md cursor-pointer text-sm text-black outline-none data-[focused=true]:bg-gray-200";

    return (
        <FadeUp className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-gray-100 border border-gray-200 rounded-xl p-8 shadow">

                {/* Form Header block */}
                <div className="border-b border-zinc-400 pb-6 mb-8">
                    <h1 className="text-3xl font-semibold tracking-tight">Post a New Job</h1>
                    <p className="text-zinc-800 text-sm mt-1 font-medium">
                        Fill out the details below to publish your open position.
                    </p>

                    {/* Company verification status panel */}
                    <div className="mt-4 flex items-center justify-between rounded border bg-gray-200 px-4 py-3">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800">
                                <Briefcase size={18} className="text-zinc-300" />
                            </div>

                            <div className="flex items-center gap-1">
                                <p className="text-xs text-zinc-700">
                                    Posting as
                                </p>

                                <h3 className="text-sm font-semibold text-black">
                                    {mockCompany.name}
                                </h3>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2">
                            <div className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
                            <span className="text-xs font-medium text-emerald-500">
                                Approved
                            </span>
                        </div>
                    </div>
                </div>

                {/* Hero UI Main Form Handler */}
                <Form onSubmit={handleSubmit} className="space-y-8" validationErrors={errors} validationBehavior='aria'>

                    {/* SECTION 1: Job Information */}
                    <Fieldset className="space-y-6 w-full">
                        <legend className="text-lg font-medium text-black border-b border-zinc-400 w-full py-4 mb-2">
                            Job Information
                        </legend>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <TextField name="jobTitle" isInvalid={!!errors.jobTitle} className="flex flex-col gap-1 w-full">
                                <Label className="text-zinc-500 font-medium text-sm ">Job Title</Label>
                                <Input placeholder="e.g. Senior Frontend Engineer" className={textInputClass} />
                                {errors.jobTitle && <FieldError className="text-xs text-danger mt-1">{errors.jobTitle}</FieldError>}
                            </TextField>

                            <Select className={selectBoxClass} name="jobCategory" isInvalid={!!errors.jobCategory}>
                                <Label className="text-zinc-500 font-medium text-sm mb-1 block">Job Category</Label>
                                <Select.Trigger className={triggerClasses}>
                                    <Select.Value className="text-black placeholder:text-zinc-600" />
                                    <Select.Indicator />
                                </Select.Trigger>
                                {errors.jobCategory && <span className="text-xs text-black mt-1">{errors.jobCategory}</span>}
                                <Select.Popover className={popoverClasses}>
                                    <ListBox className="outline-none">
                                        <ListBox.Item id="technology" className={listItemClasses} textValue="Technology">Technology</ListBox.Item>
                                        <ListBox.Item id="design" className={listItemClasses} textValue="Design">Design</ListBox.Item>
                                        <ListBox.Item id="marketing" className={listItemClasses} textValue="Marketing">Marketing</ListBox.Item>
                                        <ListBox.Item id="sales" className={listItemClasses} textValue="Sales">Sales</ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Select className={selectBoxClass} name="jobType" isInvalid={!!errors.jobType}>
                                <Label className="text-zinc-500 font-medium text-sm mb-1 block">Job Type</Label>
                                <Select.Trigger className={triggerClasses}>
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                {errors.jobType && <span className="text-xs text-danger mt-1">{errors.jobType}</span>}
                                <Select.Popover className={popoverClasses}>
                                    <ListBox className="outline-none">
                                        <ListBox.Item id="full-time" className={listItemClasses} textValue="Full-time">Full-time</ListBox.Item>
                                        <ListBox.Item id="part-time" className={listItemClasses} textValue="Part-time">Part-time</ListBox.Item>
                                        <ListBox.Item id="contract" className={listItemClasses} textValue="Contract">Contract</ListBox.Item>
                                        <ListBox.Item id="internship" className={listItemClasses} textValue="Internship">Internship</ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>

                            {/* Inline layout grouping for Salary and Currency mapping */}
                            <div className="grid grid-cols-3 gap-2">
                                <div className="col-span-2 space-y-1">
                                    <span className="text-zinc-500 font-medium text-sm block">Salary Range</span>
                                    <div className="flex gap-2">
                                        <TextField name="minSalary" isInvalid={!!errors.minSalary} className="w-full">
                                            <Input placeholder="Min" type="number" className={textInputClass} />
                                        </TextField>
                                        <TextField name="maxSalary" isInvalid={!!errors.maxSalary} className="w-full">
                                            <Input placeholder="Max" type="number" className={textInputClass} />
                                        </TextField>
                                    </div>
                                </div>

                                <Select className="w-full mt-6" name="currency" defaultSelectedKeys={["USD"]}>
                                    <Select.Trigger className={triggerClasses}>
                                        <Select.Value />
                                        <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover className={popoverClasses}>
                                        <ListBox className="outline-none">
                                            <ListBox.Item id="USD" className={listItemClasses} textValue="USD">USD ($)</ListBox.Item>
                                            <ListBox.Item id="EUR" className={listItemClasses} textValue="EUR">EUR (€)</ListBox.Item>
                                            <ListBox.Item id="GBP" className={listItemClasses} textValue="GBP">GBP (£)</ListBox.Item>
                                        </ListBox>
                                    </Select.Popover>
                                </Select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                            <div className="space-y-2">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-zinc-500 font-medium text-sm">Location</span>

                                    {/* Updated Switch using v3 Compound Component Syntax */}
                                    <Switch
                                        isSelected={isRemote}
                                        onChange={setIsRemote}
                                        size="sm"
                                    >
                                        <Switch.Control className="bg-zinc-800 data-[selected=true]:bg-white">
                                            <Switch.Thumb className="bg-zinc-400 data-[selected=true]:bg-black" />
                                        </Switch.Control>
                                        <Switch.Content>
                                            <Label className="text-xs text-zinc-400 font-medium">Remote</Label>
                                        </Switch.Content>
                                    </Switch>
                                </div>

                                <TextField name="location" isInvalid={!isRemote && !!errors.location} className="flex flex-col gap-1 w-full relative">
                                    <div className="relative flex items-center">
                                        <Globe size={16} className="absolute left-3 text-zinc-600 pointer-events-none z-10" />
                                        <Input
                                            placeholder={isRemote ? "Global / Remote" : "e.g. Austin, TX"}
                                            disabled={isRemote}
                                            className={`${textInputClass} pl-10`}
                                        />
                                    </div>
                                    {!isRemote && errors.location && <FieldError className="text-xs text-danger mt-1">{errors.location}</FieldError>}
                                </TextField>
                            </div>

                            <TextField name="deadline" isInvalid={!!errors.deadline} className="flex flex-col gap-1 w-full">
                                <Label className="text-zinc-400 font-medium text-sm">Application Deadline</Label>
                                <Input type="date" className={textInputClass} />
                                {errors.deadline && <FieldError className="text-xs text-danger mt-1">{errors.deadline}</FieldError>}
                            </TextField>
                        </div>
                    </Fieldset>

                    {/* SECTION 2: Job Description */}
                    <Fieldset className="space-y-6 w-full">
                        <legend className="text-lg font-medium py-3 text-gray-500 border-b border-zinc-400  w-full pb-2 mb-2">
                            Job Details & Description
                        </legend>

                        <TextField name="responsibilities" isInvalid={!!errors.responsibilities} className="flex flex-col gap-1 w-full">
                            <Label className="text-zinc-400 font-medium text-sm">Responsibilities</Label>
                            <TextArea
                                placeholder="Outline the core everyday responsibilities for this role..."
                                rows={4}
                                className={textAreaClass}
                            />
                            {errors.responsibilities && <FieldError className="text-xs text-danger mt-1">{errors.responsibilities}</FieldError>}
                        </TextField>

                        <TextField name="requirements" isInvalid={!!errors.requirements} className="flex flex-col gap-1 w-full">
                            <Label className="text-zinc-400 font-medium text-sm">Requirements</Label>
                            <TextArea
                                placeholder="List required experience, skills, and certifications..."
                                rows={4}
                                className={textAreaClass}
                            />
                            {errors.requirements && <FieldError className="text-xs text-danger mt-1">{errors.requirements}</FieldError>}
                        </TextField>

                        <TextField name="benefits" className="flex flex-col gap-1 w-full">
                            <Label className="text-zinc-400 font-medium text-sm">Benefits (Optional)</Label>
                            <TextArea
                                placeholder="Perks, healthcare, equity, remote stipends..."
                                rows={3}
                                className={textAreaClass}
                            />
                        </TextField>
                    </Fieldset>

                    {/* Form Actions */}
                    <div className="flex justify-end gap-3 pt-4 border-t border-zinc-400  w-full">
                        <Button
                            type="button"
                            variant="bordered"
                            className=" text-black border font-semibold border-sky-300 hover:bg-sky-400 hover:text-white duration-300 transition-all
                             rounded px-6 h-11"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            className=" text-black border font-semibold border-sky-300  hover:bg-sky-400 hover:text-white duration-300 transition-all
                             rounded px-6 h-11"
                        >
                            Post Job
                        </Button>
                    </div>
                </Form>
            </div>
        </FadeUp>
    );
}