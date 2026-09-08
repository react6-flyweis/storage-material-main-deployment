"use client";

import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function SimpleQuoteDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    siteAddress: "",
    city: "",
    state: "",
    country: "",
    zip: "",
    phone: "",
    email: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quote form submitted:", form);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-2xl p-6 rounded-xl border-0 h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle className="text-center">Get a Quote</DialogTitle>
          <DialogDescription className="text-center">
            Add your details
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="mt-3 grid grid-cols-1 gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>First Name *</Label>
              <Input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="Name"
                className="mt-1"
              />
            </div>
            <div>
              <Label>Last Name *</Label>
              <Input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Name"
                className="mt-1"
              />
            </div>
          </div>

          <div>
            <Label>Company</Label>
            <Input
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Company"
              className="mt-1"
            />
          </div>

          <div>
            <Label>Site Address</Label>
            <Input
              name="siteAddress"
              value={form.siteAddress}
              onChange={handleChange}
              placeholder="Site Address"
              className="mt-1"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>City</Label>
              <Input
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="City"
                className="mt-1"
              />
            </div>
            <div>
              <Label>State *</Label>
              <Input
                name="state"
                value={form.state}
                onChange={handleChange}
                placeholder="State"
                className="mt-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Country</Label>
              <Input
                name="country"
                value={form.country}
                onChange={handleChange}
                placeholder="Country"
                className="mt-1"
              />
            </div>
            <div>
              <Label>Zip *</Label>
              <Input
                name="zip"
                type="text"
                inputMode="numeric"
                maxLength={5}
                value={form.zip}
                onChange={(e) =>
                  setForm((f) => ({
                    ...f,
                    zip: e.target.value.replace(/\D/g, "").slice(0, 5),
                  }))
                }
                placeholder="Zip"
                className="mt-1"
              />
            </div>
          </div>

          <div>
            <Label>Phone Number *</Label>
            <Input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Add your number"
              className="mt-1"
            />
          </div>

          <div>
            <Label>Email*</Label>
            <Input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Add your email address"
              className="mt-1"
            />
          </div>

          <div>
            <Label>Notes</Label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              className="w-full rounded-md border bg-transparent px-3 py-2 text-base mt-1"
              rows={5}
              placeholder="Notes"
            />
          </div>

          <DialogFooter className="mt-4">
            <div className="flex items-center justify-center gap-4 w-full">
              <DialogClose asChild>
                <Button variant="ghost">Cancel</Button>
              </DialogClose>

              <Button type="submit" className="rounded w-40">
                SUBMIT
              </Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
