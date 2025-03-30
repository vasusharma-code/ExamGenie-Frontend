import { useState } from "react";
import { IoShareOutline } from "react-icons/io5";

const Navbar = ({ isOpen }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 h-16 flex justify-between items-center p-4 bg-white shadow-md border-b transition-all duration-300 ${
        isOpen ? "ml-64 w-[calc(100%-16rem)]" : "ml-0 w-full"
      }`}
    >
      {/* Navbar Title shifted right */}
      <h1 className="text-xl font-semibold text-gray-800 whitespace-nowrap ml-8 md:ml-24">
        ExamGenie
      </h1>

      {/* Right Side (Share & Profile) */}
      <div className="flex items-center space-x-4">
        {/* Share Button */}
        <button className="text-gray-600 hover:text-gray-800 transition">
          <IoShareOutline size={22} />
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEA8ODRAPDg8PDw8ODw8PFQ8PDg4OFRYXFhYRFRUZHSggGholGxYTITEtJSorLi4uFyAzODMsNygtLisBCgoKDQ0GGgcHDisZFRkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIARMAtwMBIgACEQEDEQH/xAAcAAEAAAcBAAAAAAAAAAAAAAAAAQIDBAUHCAb/xAA3EAACAgIABAQEBAQFBQAAAAAAAQIDBBEFEiExBgcTQSJRYXEUMoGRI1KhwRVCcrHwCGJjkuH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AxmNidEX9WL9C8oxuiL2vHAsK8YuYYxf145cQxwMfDHK0MYyEKCtCgDHxxyoscyKoISgl3/cCxVBOqDE8Y8ZYGHLluvU563yVLnkl7b9vf5mKxfM/AlNRe4JvlUp86W/m/h0l92B638OW3EMunGrdt9kIQ7bbW5P5Je7NbeN/Me22bq4Y/Tx4Plne4wbtn31He0l0f1Z4LinGcjKalk2O1xjyx2oxUV9o6W/qBvurjeHKv1lkVKvlUuaUox7/ADT6op4HiDByZclGTVOet8q3vXbfb5tfuc8FXGyZ1SU6pShOLTUovT6Pf9kB0pKrXV6SXdt60inGUJbUZQm10ai09GhOL+Ks3LUVkXzkodlHVa3/ADNRS2ylwXxDlYU5WY1nK5tOzmUZqzrvUtrYHQbqJXUeI8JeY9eTKNGdFU2yahCdfN6U2+ya23F/0NhKv/jAsJVFvZSZWVRRsqAwl1Bj8jHPQ21FjdSB5fKxgZfJoAHoaaOiLuukrVU9C5hUBbwqK0ai4jWVFWBQjWUOI51WNBTulGHM+WtN/FZY+0Ix7yf0Re2OME5TajFLbk+iS+bNJcS8Qes8ni0v4jrvWJw2qS3CiWudz0+7a03033XZAbWXiLFVMciyyNcJrom1z776SXf3/Z+y2eV8Y+PalgW2YckrLbPwtT3XJxaW52LUnvS91tfFHqaix7Lc3JpjfKVyldXGSb0krJpS0l2237E/iq7Fne1gx5aYJw6JxjNqUkpxW33gq9/N7AxNk3JuT2223Jvu233JSAAiQAAAAAAAB73w55kW41VVF6uvUJPdnPDnVfsknF719X+x4IAdDcA8YYmWqY8/p3WxTjCxcisl7xi98rkn7b39DPTgcwU3OHVP9Pb7/fs/ul8jorwrxaGRjUKV6uvVMPUm1KtWyXRzjzJcy30bXv8AcC9srLS6oylkS2trAwl9QL6+sgB6KuorxrKtdZVUAKSrI+mV1EjygeT8cVO3Gux63yzlRZc2uj5K9S5F/q019k17nOlt3LFVwnJ+ldOVek4pppfH809xR0Z4smsWxZ0uZw9GVFkU9xfM1yfD/M3pL68pz14m/CvJseDOdlEuqc4enJS91rb+/t3fQDGwscWpRemuzXRokAAAAAAAAAAAAAAABmfCiseQvQqdtvRx1OVfIk/ik2u60+u/bZhirj5E69+nJw3rbT12A6U8PZE7caqc04t1xlyyfNKKa6Levi+/uXdsTHeE8uueLSqbI3RUFucXHXO+rjrf9217mVsQGOuiCrcgB61VkHEvHEoziBQ0CdohoDX/AJwSf+H2JSjGXPXYnJwjpQlzKK20+bp7b/2NI4HE6perXlVVuq2UrdwjGN1dj96566duz+F/JdzfGVwrEyuI5VPEa423SjVPBV2pVfhFXBTVSa1zK1WOWuupR9tGF495R48pK3BVddkU28e31HjXf9rafNH7rsBpHieNCqxxqtV1feE10evlJez+2y0M34i8P5GLfKqzGso3Plrg5K3u0klJd032bXX9zF52JZRZZRdB121TlCyEu8ZJ6aAoAAAAAAAAAAAAAABc8OhGV1MZtKMra4yb7KLkk2/0A295QcLlTXf+Ij6dvPGUYzUo2KDX5lvo19vqvY2JOJVopjGK5Na0lHXT4fkLEBj7ogq3IAevciSRLsbAlaIcpNslbAseLcIx8uCryqoXRjLnhzL4oT/mhJdYy+qLjHoVcYwjvlitLbcnr6t9WVWzHcb43jYNTvzLYU1p6Tl+acu/LGK6yf0QF9bVW/itjBqG5c00nyJd317djl7zI41HO4lk3wSjDn9OGtLcY9Nv5vubS8d+P7LMK6rCwuIQdqUXkXUuqCqltcy6t9XpdVr6miJRabT6NPTT7pgSgiyAAAAAAAAAAAACKZAnqrc5RhHrKTUUvm29IDqzh8+aqqX81cJfLul0Kk0ScOo9OmqvbfJXCHXv8KS/sVZoCzuiCpaiIGf2Q2AAJWRIASyf6/Tts0L4b8Y03cUebx9y3FShiw5XLHw583XcO6a1303vq+yZvvR4DwRwbHyYcaqy6K7Yy43m7hZFPUdQcWvdd3poDEeYniDEovxsuE5305mPdTOVDhZTKMElH31tOb+3XoaUybINwdamnyL1XN8znbtuUl8l2/Y2B5i/guGO7h3Dpu12tO6FqhbHCfTca5vrztJd+sV77fTW4BgAAAAAAAAAAAAB6Hy/xPW4nhV63/HU2nrWoJz9/wDSeeNl+RvCrJ5duXyp001Sq5n7Wzaa5V80ov8AdAbuISRPolYFvNAmsQAzehom0Q0BLog0TkAJNHk1RlYGblW0Ys8zEzpV3zVMqY3Y+VGKhLcbJRUoSSi9p9GmetZADkDjEbFkXq+Mo3etY7IzTU1Nybe0yzOm/MnwziZWHlZNtCsyaMeyVU47jY5RTcYvX5lvXc5v4tTCvIvrqe4QushB99xjJpdf0AtAAAAAAAAAAAAAFXGolbOFVa5p2SjCEei3KT0l1+p1D4O4BHh2FTirrOMea2X81susn9t9jVvkd4Xdt0+I3QTppUq6eb/Ne9bkk11SW+vzf0N4SQFFokaKrRJJAW9iBNYiAGbIESAEGQZElYECBEjoDD+LvU/w/N9BSdn4a3k5VzST5Xtxj7tLbS99HJbOzUjkTxNixozMmiEXCNN06YqW+ZqD5eZ793rf6gYwAAAAAAAAAADLeFuA28RyqsSno7HuU3vlrrXWU39l/XRiT0PhLxhk8Kd0sOFHPcoRlZbBzmoR2+SPVJJtpv8A0oDpvhXDasSirFx1y1UwUIJ92l7v5tvbf3Lhs8t5c+LnxXEdtkVC+qXp3qP5HLW4zj8k1/sz08mBLJkkmRkym2BJYCWbIgZsMm0GgKbRAqNErQEugR0ABoHzr4FOGXO+MVyOPr8yXVwm0pb+1jl/7o36a18+LVDh8H2nbYqU9d47jY479vyb/Rgc9gAAAAAAAAAAAAN0f9Pf5OIdenPj6XXvqe/p8jbc0av8g40wxcj+NS8i67m9BTj60aa1pOUO/dy/obSkgLeRTZXkiRxAtpoiTziAM+AAINErROyRgStEjROyUCGix43wWjOonjZdasqnra6pxku0otdVJGQSKOdm149crr5xrrgm3KTS/Rb9wNLeKPKXBwK3kTzr1BvlrplGr1ZyfZc+0vv8J4njXhqjEw6r7J2u6/cqknH0/T3qDacdttJvv7/QvvMjxhbxPKk65uGLT0qg2lHl2lzte7b/AOdDD8V47G/Gpol1nTCNfNrbmk+km/bSSA86AAAAAAAAAAK2HlWU2QtpnKuyuSnCcXqUZL3R1P4O47HiOFRlrXNOOrYr/JdHpOP23vX0aOUj23lv4+nwmc67Yyuw7NynVDl54W60rIb+yTW+32A6OaJGjw/AvNrhuVaqZ+riOWlCeQoKqUn7OUW+X9dI92/muqfVNdmgKE0CM0AMyGyBKwDZK2TENAShEdFtxHNhj1ytn2jFtRWty17IC28Q8bpwMeeTftxgm1COnOeuul/96HN/jrx/lcUskuaVOKpbrx01pdNbk13ff92ZTza8SW5F0ad8sHFWSin3T/LFv5dN/r+hrsAAAAAAAAAAAAAAAAAe08IeZOdw5RpbWVjR6Ki1vcI/KufeP9V9DxYA6N4H5ncLy0ue78HZrbryfgj+li+F/un9CJziAO1iBFkNAQKWVfGqE7bHywrhKyb6vUYrbf7Ilz82rHg7ciyFNce87GoxX7muPFnnBw2uFtGPCec5xlXLl/h06ktP431ff2QGO4n550xk1jYk7Y7aU7J+nzL+bl0zzWZ5mxy+aWVzw3FxjCC6RW1+Xr31vq/fRrjiOUrrJWRgq1LtCPaKLYDNeLeKV5WS7aU1WoQhHfd67v6JttmFAAAAAAAAAAAAAAAAAAAAAAAO1ink3wqhKy2ShXCLlOcnqMYru2VTU/n54g9LGrwa5alc1ZbrvyL8q/fb/RAa581/Gv8AiuSo07WLj80at95t97GvqeGAAAAAAAAAAAAAAAAAAAAAAAAAAAADtfZy55scSeTxCVu9wknKr5eltxi1+kd/qb98weM/guG5d6fLP0nXW/8AyT+GP+5zH4it5rKo616WJiV999VVFv7dZMDFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN3f9QfF9V4mFF/nlPIn9o/DFfu2/wBDTfEshW2zsjvUn030ekkj1nnDxJ5HFb47+HHjCiPfXRcz/rJ/seJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMh4gyvWy8q5dVbkXWL7Sm2v6GPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/2Q=="
            alt="Profile"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          />
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-lg border z-50">
              <div className="p-3 text-gray-700">
                <p className="font-semibold">John Doe</p>
                <p className="text-sm text-gray-500">johndoe@example.com</p>
              </div>
              <button
                className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                onClick={() => alert("Logging out...")}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;